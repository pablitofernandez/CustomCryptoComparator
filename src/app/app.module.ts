import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CryptoCompareAPIService} from './Services/crypto_compare_api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [ CryptoCompareAPIService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
