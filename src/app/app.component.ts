import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SerachService } from './Searchservice';
import { CartitemComponent } from './cartitem/cartitem.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  isMenuVisible : boolean =false;

  constructor(private serachservice: SerachService,private routes: Router){}
  
  
  onsearch(event: any): void{
    this.serachservice.upadateSearch(event.target.value);
  } // Track the visibility of the mobile menu
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
