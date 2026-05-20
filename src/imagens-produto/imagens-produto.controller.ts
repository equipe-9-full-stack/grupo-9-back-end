import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagensProdutoService } from './imagens-produto.service';
import { CreateImagensProdutoDto } from './dto/create-imagens-produto.dto';
import { UpdateImagensProdutoDto } from './dto/update-imagens-produto.dto';

@Controller('imagens-produto')
export class ImagensProdutoController {
  constructor(private readonly imagensProdutoService: ImagensProdutoService) {}

  @Post()
  create(@Body() createImagensProdutoDto: CreateImagensProdutoDto) {
    return this.imagensProdutoService.create(createImagensProdutoDto);
  }

  @Get()
  findAll() {
    return this.imagensProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagensProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagensProdutoDto: UpdateImagensProdutoDto) {
    return this.imagensProdutoService.update(+id, updateImagensProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagensProdutoService.remove(+id);
  }
}
