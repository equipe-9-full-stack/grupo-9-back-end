import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { createcategoriasdto } from './Dto/create-categorias.dto '
import { UpdateCategoriasDto } from './Dto/update-categorias.dto'

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  create(@Body() createCategoriasDto: createcategoriasdto ) {
    return this.categoriasService.create(createCategoriasDto);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriasDto: UpdateCategoriasDto) {
    return this.categoriasService.update(+id, updateCategoriasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}