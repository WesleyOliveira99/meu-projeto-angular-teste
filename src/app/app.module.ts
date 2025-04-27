import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaFerramentasComponent } from './lista-ferramentas/lista-ferramentas.component';
import { ListaClientesComponent } from './components/cliente/cliente.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent,
    ListaClientesComponent,
    ListaFerramentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
