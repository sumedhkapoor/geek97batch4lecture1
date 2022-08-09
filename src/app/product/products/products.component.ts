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
  imageButtonTitle = "Hide";
  showImage = true;
  buyMessage = "";

  constructor() {

  }
  ngOnInit(): void {
    this.products = this.getProducts();
    console.log(this.products);

  }

  onBuyClick(p: IProduct) {
    this.buyMessage = "You have bought " + p.Title + " quantity "+ p.BuyQuantity+" for total value of: $"+ p.Price * p.BuyQuantity;
    p.Quantity = p.Quantity - p.BuyQuantity;
    p.BuyQuantity = 0;
  }


  toggleImage() {
    this.showImage = !this.showImage;
    if (this.showImage) {
      this.imageButtonTitle = 'Hide';
    } else {
      this.imageButtonTitle = 'Show';
    }
  }
  ngOnDestroy(): void {
    console.log("ProductsComponent destroyed");
  }

  getProducts(): IProduct[] {

    return [
      {
        Id:"1",
        Title:"Pen",
        Price: 200,
        Color : "Red",
        inStock: true,
        Quantity: 20,
        Agency:"Abc",
        Image:"assets/1-pen-png-image.png",
        BuyQuantity:0
      },
      {
        Id:"2",
        Title:"Pencil",
        Price: 100,
        Color : "Blue",
        inStock: false,
        Quantity: 200,
        Agency:"Xyz",
        Image:"assets/12-pencil-png-image.png",
        BuyQuantity:0
      },
      {
        Id:"3",
        Title:"Book",
        Price: 2000,
        Color : "White",
        inStock: true,
        Quantity: 300,
        Agency:"Abc",
        Image:"assets/5-2-book-png-6.png",
        BuyQuantity:0
      },
      {
        Id:"4",
        Title:"Bat",
        Price: 1200,
        Color : "Black",
        inStock: false,
        Quantity: 400,
        Agency:"Abc",
        Image:"assets/89947-bat-baseball-line-batting-free-hd-image.png",
        BuyQuantity:0
      },
      {
        Id:"5",
        Title:"Ball",
        Price: 200,
        Color : "Blue",
        inStock: false,
        Quantity: 500,
        Agency:"Xyz",
        Image:"assets/2-2-basketball-png-file_400x400.png",
        BuyQuantity:0
      }
    ]
  }


}


// pipe ia function
// trafsomr an input to output

// without chnaging the underlyiing structute of the input
