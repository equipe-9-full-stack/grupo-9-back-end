export class CreateComentariosAvaliacaoDto {
  usuario_id!: number;
  avaliacao_loja_id?: number;
  avaliacao_produto_id?: number;
  conteudo!: string;
}
