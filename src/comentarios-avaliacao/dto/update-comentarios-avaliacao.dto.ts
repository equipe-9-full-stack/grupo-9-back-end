import { PartialType } from '@nestjs/mapped-types';
import { CreateComentariosAvaliacaoDto } from './create-comentarios-avaliacao.dto';

export class UpdateComentariosAvaliacaoDto extends PartialType(CreateComentariosAvaliacaoDto) {}
