import { Component } from '@angular/core';
import { PRODUCTS, Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { SerachService } from '../Searchservice';
import { query } from '@angular/animations';
import { Cartservice } from '../cartitem/cartservice';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {
  products: Product[] = PRODUCTS;
  quantity: number = 1;

  filterproducts =[...this.products];

 
  constructor(private searchservice: SerachService, private cartservice: Cartservice){}

  addtocart(product: Product){
    this.cartservice.addtocart(product);
    alert(`${product.name} has been added to cart.`);
  }
  buynow(product: Product){
    console.log(`Buying:`, product);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.searchservice.search$.subscribe(query=>{
      this.filterproducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    })
  }

  Trackbyproductid(index: number, product: Product): number{
    return product.id;
  }

  
 increamentQuantity(productId : number): void{
  const product = this.products.find(p=> p.id=== productId);
  if(product && product.stock > 0 ){
    product.quantity = product.quantity|| 0;
    product.quantity+= 1;
    product.stock-= 1
  }
 } 
 decreamentQuantity(productId : number): void{
  const product = this.products.find(p=> p.id === productId);
  if(product && product.stock > 0){
    product.quantity = product.quantity || 0;
    product.quantity -= 1;
    product.stock += 1;
  }
 }


    
  }


