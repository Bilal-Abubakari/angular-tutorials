import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import { HeroComponent } from './hero/hero.component';
import { MatButtonModule } from "@angular/material/button";
import { ShopComponent } from './shop/shop.component';
import { CarCardComponent } from './shop/car-card/car-card.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    LoginComponent,
    DisplayDetailsComponent,
    HeroComponent,
    ShopComponent,
    CarCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
