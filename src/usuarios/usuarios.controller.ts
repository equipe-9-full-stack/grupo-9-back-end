import { Controller, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import type { UsuarioDto } from './dto/usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: UsuarioDto) { 
    return this.usuariosService.create(data);
  }
}