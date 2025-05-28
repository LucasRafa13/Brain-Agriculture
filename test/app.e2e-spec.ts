import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/database/prisma.service';

describe('Fluxo E2E com PostgreSQL', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    prisma = app.get(PrismaService);

    // Limpa tudo antes de começar
    await prisma.crop.deleteMany();
    await prisma.harvest.deleteMany();
    await prisma.farm.deleteMany();
    await prisma.producer.deleteMany();
  });

  afterAll(async () => {
    await app.close();
  });

  it('fluxo completo: produtor → fazenda → safra → cultura → dashboard', async () => {
    const producer = await request(app.getHttpServer())
      .post('/producers')
      .send({ name: 'Teste', cpfCnpj: '98765432100' })
      .expect(201);

    const farm = await request(app.getHttpServer())
      .post('/farms')
      .send({
        name: 'Fazenda E2E',
        city: 'Barra do Garças',
        state: 'MT',
        totalArea: 200,
        arableArea: 120,
        vegetationArea: 80,
        producerId: producer.body.id,
      })
      .expect(201);

    const harvest = await request(app.getHttpServer())
      .post('/harvests')
      .send({ year: 'Safra 2025', farmId: farm.body.id })
      .expect(201);

    await request(app.getHttpServer())
      .post('/crops')
      .send({ name: 'Milho', harvestId: harvest.body.id })
      .expect(201);

    const overview = await request(app.getHttpServer())
      .get('/dashboard/overview')
      .expect(200);

    expect(overview.body.totalFarms).toBe(1);
    expect(overview.body.totalHectares).toBe(200);
  });
});
