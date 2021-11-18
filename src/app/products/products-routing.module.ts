import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriteProductsGuard } from '../auth/guards/write-products.guard';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'create', component: CreateComponent, canActivate: [WriteProductsGuard] },
  { path: 'delete/:id', component: DeleteComponent, canActivate: [WriteProductsGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
