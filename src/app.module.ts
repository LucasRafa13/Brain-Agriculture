import { Module } from '@nestjs/common';
import { ProducerModule } from './producer/producer.module';
import { FarmModule } from './farm/farm.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [PrismaModule, ProducerModule, FarmModule],
})
export class AppModule {}
