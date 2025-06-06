import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  controllers: [ProducerController],
  providers: [ProducerService],
  imports: [PrismaModule],
})
export class ProducerModule {}
