import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Componenete de animacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Componentes Personalizados
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar el locale app
import localeMx from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeMx);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,
    VentasModule

  ],
  providers: [
    { provide:LOCALE_ID, useValue:'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
