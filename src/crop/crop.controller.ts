import { Controller, Post, Get, Body } from '@nestjs/common';
import { CropService } from './crop.service';
import { CreateCropDto } from './dto/create-crop.dto';

@Controller('crops')
export class CropController {
  constructor(private readonly cropService: CropService) {}

  @Post()
  create(@Body() dto: CreateCropDto) {
    return this.cropService.create(dto);
  }

  @Get()
  findAll() {
    return this.cropService.findAll();
  }
}
