import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from '../shared/product.dto';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-inno-tech-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  private selectedId: number | undefined;
  public selectedProduct: ProductDto | undefined;

  updateForm = new FormGroup({
    id: new FormControl({ disabled: true }),
    name: new FormControl('', Validators.required)
  });

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductsService) { }

  get name() { return this.updateForm.get('username'); }

  ngOnInit(): void {
    this.selectedId = Number(this._route.snapshot.paramMap.get('id'));

    this._productService.getProduct(this.selectedId).subscribe(product => {
      this.selectedProduct = product;
      this.updateForm.patchValue(product);
    });
  }

  doUpdate() {
    if (this.selectedProduct) {
      let product = this.updateForm.value as ProductDto;
      product.id = this.selectedProduct.id;

      this._productService.updateProduct(product).subscribe(product => {
        this._router.navigateByUrl('/').then(r => { });
      });
    }
  }

}
