import { Controller, Post, Get, Body } from '@nestjs/common';
import { HarvestService } from './harvest.service';
import { CreateHarvestDto } from './dto/create-harvest.dto';

@Controller('harvests')
export class HarvestController {
  constructor(private readonly harvestService: HarvestService) {}

  @Post()
  create(@Body() dto: CreateHarvestDto) {
    return this.harvestService.create(dto);
  }

  @Get()
  findAll() {
    return this.harvestService.findAll();
  }
}
