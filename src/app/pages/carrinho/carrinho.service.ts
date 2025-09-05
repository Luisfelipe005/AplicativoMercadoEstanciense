import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  listaDoCarrinho: any[] = [];

  constructor() { }

  adicionarProduto(produto: any) {
    this.listaDoCarrinho.push(produto);
  }

  removerProduto(produtoId: number) {
    this.listaDoCarrinho = this.listaDoCarrinho.filter(p => p.id !== produtoId);
  }

  pegarProdutosDoCarrinho(): any[] {
    return this.listaDoCarrinho;
  }

  calcularTotal(): number {
    return this.listaDoCarrinho.reduce((soma, item) => soma + (item.preco * (item.qtd || 1)), 0);
  }
}
