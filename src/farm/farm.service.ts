import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateFarmDto } from './dto/create-farm.dto';

@Injectable()
export class FarmService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFarmDto) {
    const total = data.totalArea;
    const soma = data.arableArea + data.vegetationArea;

    if (soma > total) {
      throw new BadRequestException(
        'A soma das áreas agricultável e de vegetação não pode exceder a área total da fazenda.',
      );
    }

    return this.prisma.farm.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.farm.findMany({
      include: { producer: true },
    });
  }
}
