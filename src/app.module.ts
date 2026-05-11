import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { PrismaService } from '../prisma/prisma.service'; 
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppService } from './app.service';

@Module({
  controllers: [],
  providers: [AppService],
  imports: [UsuariosModule], 
})
export class AppModule {}