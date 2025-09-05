import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonFooter
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

addIcons({ 'trash-outline': trashOutline });

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, IonList, IonItem,
    IonLabel, IonButton, IonIcon, IonFooter
  ]
})
export class CarrinhoPage implements OnInit {

  carrinho: any[] = [];
  total: number = 0;

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    this.carrinho = this.carrinhoService.pegarProdutosDoCarrinho();
    this.total = this.carrinhoService.calcularTotal();
  }

  removerProduto(produtoId: number) {
    this.carrinhoService.removerProduto(produtoId);
    this.carregarCarrinho();
  }

  irParaProdutos() {
    this.router.navigate(['/produtos']);
  }

  finalizarCompra() {
    alert("Compra finalizada! Obrigado.");
    this.carrinho = [];
    this.total = 0;
  }
}
