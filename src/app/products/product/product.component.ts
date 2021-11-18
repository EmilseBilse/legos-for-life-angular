import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductDto } from '../shared/product.dto';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-inno-tech-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private selectedId: number | undefined;
  public selectedProduct: ProductDto | undefined;

  detailsForm = new FormGroup( {
    id: new FormControl({ disabled: true }),
    name: new FormControl('', Validators.required)
  });

  constructor(private _route : ActivatedRoute, private _router : Router, private _productService : ProductsService) { }

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));

    this._productService.getProduct(this.selectedId).subscribe(product => {
      this.selectedProduct = product;
      this.detailsForm.patchValue(product);
    });
  }

}
