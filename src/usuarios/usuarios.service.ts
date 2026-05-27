import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { UsuarioDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: UsuarioDto) {
    return await this.prisma.usuario.create({
      data: {
        username: data.username,
        email: data.email,
        senha_hash: data.senha_hash,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async getById(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return usuario;
  }

  async update(id: number, data: UsuarioDto) {
    await this.getById(id);
    return await this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    await this.getById(id);
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
}