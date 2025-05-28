import { Controller, Post, Get, Body } from '@nestjs/common';
import { FarmService } from './farm.service';
import { CreateFarmDto } from './dto/create-farm.dto';

@Controller('farms')
export class FarmController {
  constructor(private readonly farmService: FarmService) {}

  @Post()
  create(@Body() dto: CreateFarmDto) {
    return this.farmService.create(dto);
  }

  @Get()
  findAll() {
    return this.farmService.findAll();
  }
}
