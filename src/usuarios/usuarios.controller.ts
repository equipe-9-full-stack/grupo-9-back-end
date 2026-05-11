import { Controller, Post, Body, Get, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './dto/usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: UsuarioDto) {
    return this.usuariosService.create(data);
  }

  @Get()
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Get(":id")
  async getById(@Param("id", ParseIntPipe) id: number) {
    return this.usuariosService.getById(id);
  }

  @Put(":id")
  async update(
    @Param("id", ParseIntPipe) id: number, 
    @Body() data: UsuarioDto
  ) {
    return this.usuariosService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return this.usuariosService.delete(id);
  }
}