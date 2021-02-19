import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localePt);

//PrimeNG
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
