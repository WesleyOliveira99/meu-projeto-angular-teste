import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaFerramentasComponent } from './lista-ferramentas/lista-ferramentas.component';
import { ListaClientesComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent,
    ListaClientesComponent,
    ListaFerramentasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
