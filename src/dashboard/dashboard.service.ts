import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getOverview() {
    const totalFarms = await this.prisma.farm.count();
    const totalHectares = await this.prisma.farm.aggregate({
      _sum: { totalArea: true },
    });

    return {
      totalFarms,
      totalHectares: totalHectares._sum.totalArea || 0,
    };
  }

  async getFarmsByState() {
    const result = await this.prisma.farm.groupBy({
      by: ['state'],
      _count: { state: true },
    });

    return result.map((r) => ({
      label: r.state,
      value: r._count.state,
    }));
  }

  async getCulturesDistribution() {
    const result = await this.prisma.crop.groupBy({
      by: ['name'],
      _count: { name: true },
    });

    return result.map((r) => ({
      label: r.name,
      value: r._count.name,
    }));
  }

  async getLandUse() {
    const result = await this.prisma.farm.aggregate({
      _sum: {
        arableArea: true,
        vegetationArea: true,
      },
    });

    return [
      { label: 'Área Agricultável', value: result._sum.arableArea || 0 },
      { label: 'Vegetação', value: result._sum.vegetationArea || 0 },
    ];
  }
}
