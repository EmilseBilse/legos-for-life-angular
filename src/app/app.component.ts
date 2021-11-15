import { Component } from '@angular/core';
import { ProductDto } from './products/shared/product.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  _products : ProductDto[] | undefined

  constructor(){
  }

  ngInit(){

  }
}
