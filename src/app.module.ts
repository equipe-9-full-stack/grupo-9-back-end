import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvaliacaoLojaModule } from './avaliacao-loja/avaliacao-loja.module';

@Module({
  imports: [AvaliacaoLojaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
