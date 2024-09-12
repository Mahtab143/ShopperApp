import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Cartservice } from './cartservice';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.css'
})
export class CartitemComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartservice: Cartservice, private router: Router){
  }

  ngOnInit(): void {
      this.cartItems = this.cartservice.getCart();
  }

  Navigate(){
    this.router.navigate(["app-cartitem"])
  }
}
