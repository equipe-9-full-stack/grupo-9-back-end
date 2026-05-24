import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    // Configurando a "máquina de crachás"
    JwtModule.register({
      global: true,
      secret: 'cjr-chave-super-secreta', // Em um projeto real, isso fica no arquivo .env
      signOptions: { expiresIn: '1d' }, // O token vai expirar em 1 dia
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}