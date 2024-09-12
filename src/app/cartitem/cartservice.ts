import { Injectable } from "@angular/core";
import { Product } from '../product.model';

@Injectable({
    providedIn:'root',
})

export class Cartservice{
    private cart: Product[] = [];
 
    addtocart(product: Product){
        const productincart = this.cart.find(p=> p.id === product.id);
        if(productincart){
            productincart.quantity += product.quantity;
        }else{
            this.cart.push({...product});
        }
    }
    getCart():Product[]{
        return this.cart;
    }
    clearCart(){
        this.cart=[];
    }
}

