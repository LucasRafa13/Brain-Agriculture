import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateCropDto } from './dto/create-crop.dto';

@Injectable()
export class CropService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCropDto) {
    return this.prisma.crop.create({ data });
  }

  async findAll() {
    return this.prisma.crop.findMany({
      include: { harvest: true },
    });
  }
}
