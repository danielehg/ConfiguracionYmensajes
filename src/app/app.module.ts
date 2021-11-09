import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './components/chat/chat.component';
import { LightComponent } from './components/light/light.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { VentanaLetraComponent } from './components/ventana-letra/ventana-letra.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { IdiomaComponent } from './components/idioma/idioma.component';
import {MatSelectModule} from '@angular/material/select';
import { FiltoComponent } from './components/filto/filto.component';

'@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LightComponent,
    VentanaLetraComponent,
    ConfiguracionComponent,
    IdiomaComponent,
    FiltoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule
  ],

  entryComponents:[ConfiguracionComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
