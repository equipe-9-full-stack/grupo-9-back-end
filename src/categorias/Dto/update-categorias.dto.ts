import { PartialType } from '@nestjs/mapped-types';
import { createcategoriasdto } from './create-categorias.dto '

export class UpdateCategoriasDto extends PartialType(createcategoriasdto) {}