import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateProducerDto } from './dto/create-producer.dto';

@Injectable()
export class ProducerService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProducerDto) {
    const exists = await this.prisma.producer.findUnique({
      where: { cpfCnpj: data.cpfCnpj },
    });

    if (exists) {
      throw new BadRequestException('Produtor com este CPF/CNPJ já existe.');
    }

    return this.prisma.producer.create({ data });
  }

  async findAll() {
    return this.prisma.producer.findMany();
  }
}
