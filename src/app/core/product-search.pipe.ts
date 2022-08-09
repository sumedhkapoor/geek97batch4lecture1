import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../entitites/product.entity';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduct[], search: string): IProduct[] {
    
    if(search == undefined){
      return value; 
    }
    return value.filter(p => p.Title.toLowerCase().includes(search.toLowerCase()));

  }

}
