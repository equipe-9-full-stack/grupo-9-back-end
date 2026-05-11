import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoLojaDto } from './dto/create-avaliacao-loja.dto';
import { PrismaService } from '../database/prisma.service';
import { UpdateAvaliacaoLojaDto } from './dto/update-avaliacao-loja.dto';

@Injectable()
export class AvaliacaoLojaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAvaliacaoLojaDto) {
    const avaliacao = await this.prisma.avaliacaoLoja.create({
      data,
    });

    return avaliacao;
  }

  async findAll() {
    return this.prisma.avaliacaoLoja.findMany({
      include: {
        usuario: true,
        loja: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.avaliacaoLoja.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateAvaliacaoLojaDto) {
    return this.prisma.avaliacaoLoja.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.avaliacaoLoja.delete({
      where: { id },
    });
  }
}
