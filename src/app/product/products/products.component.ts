import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Abc } from 'src/app/entitites/abc.entity';
import { IProduct } from 'src/app/entitites/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,  OnDestroy {

  products! : IProduct[];
  pText = "";
 
  constructor() { 
   
  }
  ngOnInit(): void {
    this.products = this.getProducts(); 
    console.log(this.products);
   
  }
 
  getProducts(): IProduct[] {

    return [
      {
        Id:"1",
        Title:"Pen",
        Price: 200, 
        Color : "Red",
        inStock: true,
        Agency:"Abc"
      },
      {
        Id:"2",
        Title:"Pencil",
        Price: 100, 
        Color : "Blue",
        inStock: false,
        Agency:"Xyz"
      },
      {
        Id:"3",
        Title:"Book",
        Price: 2000, 
        Color : "White",
        inStock: true,
        Agency:"Abc"
      },
      {
        Id:"4",
        Title:"Bat",
        Price: 1200, 
        Color : "Black",
        inStock: false,
        Agency:"Abc"
      },
      {
        Id:"5",
        Title:"Ball",
        Price: 200, 
        Color : "Blue",
        inStock: false,
        Agency:"Xyz"
      }

    ]

  }

  ngOnDestroy(): void {
    
  }
}


// pipe ia function 
// trafsomr an input to output 

// without chnaging the underlyiing structute of the input 