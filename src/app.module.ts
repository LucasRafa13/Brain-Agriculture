import { Module } from '@nestjs/common';
import { ProducerModule } from './producer/producer.module';
import { FarmModule } from './farm/farm.module';
import { PrismaModule } from './database/prisma.module';
import { HarvestModule } from './harvest/harvest.module';
import { CropModule } from './crop/crop.module';

@Module({
  imports: [
    PrismaModule,
    ProducerModule,
    FarmModule,
    HarvestModule,
    CropModule,
  ],
})
export class AppModule {}
