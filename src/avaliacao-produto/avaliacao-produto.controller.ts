import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoProdutoService } from './avaliacao-produto.service';
import { CreateAvaliacaoProdutoDto } from './dto/create-avaliacao-produto.dto';
import { UpdateAvaliacaoProdutoDto } from './dto/update-avaliacao-produto.dto';

@Controller('avaliacao-produto')
export class AvaliacaoProdutoController {
  constructor(private readonly avaliacaoProdutoService: AvaliacaoProdutoService) {}

  @Post()
  create(@Body() data: CreateAvaliacaoProdutoDto) {
    return this.avaliacaoProdutoService.create(data);
  }

  @Get()
  findAll() {
    return this.avaliacaoProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateAvaliacaoProdutoDto) {
    return this.avaliacaoProdutoService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoProdutoService.remove(+id);
  }
}
