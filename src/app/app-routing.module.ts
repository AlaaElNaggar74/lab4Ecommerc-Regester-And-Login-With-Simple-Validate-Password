import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { TestformComponent } from './testform/testform.component';
import { TestformReactivFormComponent } from './testform-reactiv-form/testform-reactiv-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ProductsListComponent,
  },
  {
    path: 'addTocartx',
    component: AddToCartComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'drivenForm',
    component: TestformComponent,
  },
  {
    path: 'reactiveForm',
    component: TestformReactivFormComponent,
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'details/:proId',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
