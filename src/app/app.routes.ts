import {  Routes } from '@angular/router';
import { ApphomeComponent } from './apphome/apphome.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { CartitemComponent } from './cartitem/cartitem.component';


export const routes: Routes = [
    {path: "", component : ApphomeComponent},
    {path: "app-signin", component: SigninComponent },
    {path: "app-signup", component: SignupComponent},
    {path: 'app-products', component: ProductsComponent},
    {path: 'app-cartitem', component: CartitemComponent},
   
    
];

