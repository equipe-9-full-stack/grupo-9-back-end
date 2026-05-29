import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAvaliacaoProdutoDto } from './dto/create-avaliacao-produto.dto';
import { UpdateAvaliacaoProdutoDto } from './dto/update-avaliacao-produto.dto';

@Injectable()
export class AvaliacaoProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAvaliacaoProdutoDto) {
    const avaliacao = await this.prisma.avaliacaoProduto.create({
      data,
    });

    return avaliacao;
  }

  async findAll() {
    return this.prisma.avaliacaoProduto.findMany({
      include: {
        usuario: true,
        produto: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.avaliacaoProduto.findUnique({
      where: { id },
      include: {
        usuario: true,
        produto: true,
      },
    });
  }

  async update(id: number, data: UpdateAvaliacaoProdutoDto) {
    return this.prisma.avaliacaoProduto.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.avaliacaoProduto.delete({
      where: { id },
    });
  }
}
