import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateHarvestDto } from './dto/create-harvest.dto';

@Injectable()
export class HarvestService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateHarvestDto) {
    return this.prisma.harvest.create({ data });
  }

  async findAll() {
    return this.prisma.harvest.findMany({ include: { farm: true } });
  }
}
