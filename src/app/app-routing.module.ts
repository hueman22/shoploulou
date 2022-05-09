import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { DemocarouselComponent } from './democarousel/democarousel.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { LoulouComponent } from './loulou/loulou.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { RegisterComponent } from './register/register.component';
import { ShopallComponent } from './shopall/shopall.component';
import { SigninComponent } from './signin/signin.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
const routes: Routes = [
  {path: '', component:TrangchuComponent},
  {path: 'shopall', component:ShopallComponent},
  {path: 'lookbook', component:LookbookComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'loulou', component:LoulouComponent},
  {path: 'product', component:ProductCartComponent},
  {path: 'commnunity', component:CommunityComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'demo', component:DemocarouselComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
