import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MaterialModule } from './materail.module';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';

import { ErrorService } from './services/error.service';
import { ProductInMemoryService } from './services/product-in-memory.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductInMemoryService),
  ],
  providers: [
    ErrorService,    
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
