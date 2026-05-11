import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service'
import { LojaDto } from './dto/lojas.dto';

@Injectable()
export class LojasService {

    constructor (private prisma: PrismaService) {}

    async create (data: LojaDto) {
        const loja = await this.prisma.loja.create({
            data
        });
        
        return loja; 
    }
}