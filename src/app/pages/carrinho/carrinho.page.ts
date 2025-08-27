import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service'; // Importa o serviço
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

addIcons({
  'trash-outline': trashOutline,
});

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonButton, IonIcon]
})
export class CarrinhoPage implements OnInit {

  carrinho: any[] = [];

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.carrinho = this.carrinhoService.pegarProdutosDoCarrinho();
  }

  removerProduto(produtoId: number) {
    this.carrinhoService.removerProduto(produtoId);
    this.carrinho = this.carrinhoService.pegarProdutosDoCarrinho();
  }

  irParaProdutos() {
    this.router.navigate(['/produtos']);
  }
}