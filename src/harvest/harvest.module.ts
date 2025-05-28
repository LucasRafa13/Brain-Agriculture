import { Module } from '@nestjs/common';
import { HarvestService } from './harvest.service';
import { HarvestController } from './harvest.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  controllers: [HarvestController],
  providers: [HarvestService],
  imports: [PrismaModule],
})
export class HarvestModule {}
