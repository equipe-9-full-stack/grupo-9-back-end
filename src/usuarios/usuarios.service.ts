import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { UsuarioDto } from './dto/usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: UsuarioDto) { 
    const usuario = await this.prisma.usuario.create({
      data,
    });
    
    return usuario;
  }
}