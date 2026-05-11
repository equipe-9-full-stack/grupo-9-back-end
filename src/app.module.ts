import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LojasModule } from './lojas/lojas.module';

@Module({
  imports: [UsuariosModule, LojasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}