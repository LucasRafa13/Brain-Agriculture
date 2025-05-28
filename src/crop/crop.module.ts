import { Module } from '@nestjs/common';
import { CropService } from './crop.service';
import { CropController } from './crop.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  controllers: [CropController],
  providers: [CropService],
  imports: [PrismaModule],
})
export class CropModule {}
