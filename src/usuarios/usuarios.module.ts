import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaService } from '../database/prisma/prisma.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService],
  exports: [PrismaService],
})
export class UsuariosModule {}