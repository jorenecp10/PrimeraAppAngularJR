import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TarjetasComponent } from './pages/tarjetas/tarjetas.component';
import { ManulateralComponent } from './shared/manulateral/manulateral.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TarjetasComponent,
    ManulateralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
