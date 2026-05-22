import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service'; 
import { LojaDto } from './dto/lojas.dto';

@Injectable()
export class LojasService {
  constructor(private prisma: PrismaService) {}

  async create(data: LojaDto) {
    return await this.prisma.loja.create({
      data: {
        nome: data.nome,
        endereco: data.endereco,
        descricao: data.descricao,
        logo_url: data.logo_url,
        banner_url: data.banner_url,
        sticker_url: data.sticker_url,
        usuario: {connect: { id: data.usuario_id }
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.loja.findMany({
      include: { usuario: true }
    });
  }

  async getById(id: number) {
    const loja = await this.prisma.loja.findUnique({
      where: { id },
      include: { usuario: true }
    });

    if (!loja) {
      throw new NotFoundException('Loja não encontrada!');
    }

    return loja;
  }

  async update(id: number, data: LojaDto) {
    await this.getById(id);

    return await this.prisma.loja.update({
      where: { id },
      data: {
        nome: data.nome,
        endereco: data.endereco,
        descricao: data.descricao,
        logo_url: data.logo_url,
        banner_url: data.banner_url,
        sticker_url: data.sticker_url,
      },
    });
  }

  async delete(id: number) {
    await this.getById(id);

    return await this.prisma.loja.delete({
      where: { id },
    });
  }
}