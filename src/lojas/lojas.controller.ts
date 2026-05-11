import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { LojaDto } from './dto/lojas.dto';

@Controller('lojas')
export class LojasController {
  constructor(private readonly lojasService: LojasService) {}

  @Post()
  async create(@Body() data: LojaDto) {
    return this.lojasService.create(data);
  }

  @Get()
  async findAll() {
    return this.lojasService.findAll();
  }

  @Get(":id")
  async getById(@Param("id", ParseIntPipe) id: number) {
    return this.lojasService.getById(id);
  }

  @Put(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() data: LojaDto) {
    return this.lojasService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.lojasService.delete(id);
  }
}