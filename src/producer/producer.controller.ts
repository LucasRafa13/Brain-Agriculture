import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { CreateProducerDto } from './dto/create-producer.dto';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  create(@Body() dto: CreateProducerDto) {
    return this.producerService.create(dto);
  }

  @Get()
  findAll() {
    return this.producerService.findAll();
  }
}
