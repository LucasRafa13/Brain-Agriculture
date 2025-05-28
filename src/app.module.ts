import { Module } from '@nestjs/common';
import { ProducerModule } from './producer/producer.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [PrismaModule, ProducerModule],
})
export class AppModule {}
