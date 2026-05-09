export class CreateProdutoDto {
  loja_id?: number;
  categoria_id?: number;
  nome!: string;
  descricao?: string;
  preco!: number;
  estoque!: number;
}