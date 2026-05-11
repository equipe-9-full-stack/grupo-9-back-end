import { Controller, Post, Body } from '@nestjs/common';
import { LojasService } from './lojas.service';
import type { LojaDto } from './dto/lojas.dto';

@Controller('lojas')
export class LojasController {
  constructor(private readonly lojasService: LojasService) {}

  @Post()
  async create(@Body() data: LojaDto) {

    return this.lojasService.create(data);
  }
}