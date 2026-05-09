import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
  return this.prisma.produto.create({
    data: {
      nome: createProdutoDto.nome,
      descricao: createProdutoDto.descricao,
      preco: createProdutoDto.preco,
      estoque: createProdutoDto.estoque,
      loja_id: createProdutoDto.loja_id ?? 0,
      categoria_id: createProdutoDto.categoria_id ?? 0,
    },
  });
}

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(id: number) {
    return this.prisma.produto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  remove(id: number) {
    return this.prisma.produto.delete({
      where: { id },
    });
  }
}