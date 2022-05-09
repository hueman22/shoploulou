import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ShopallComponent } from './shopall/shopall.component';
import { ContentComponent } from './content/content.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { ContactComponent } from './contact/contact.component';
import { LoulouComponent } from './loulou/loulou.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { CommunityComponent } from './community/community.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { DemocarouselComponent } from './democarousel/democarousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    TrangchuComponent,
    ShopallComponent,
    LookbookComponent,
    ContactComponent,
    LoulouComponent,
    ProductCartComponent,
    CommunityComponent,
    RegisterComponent,
    SigninComponent,
    DemocarouselComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CarouselModule,
    OwlModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
