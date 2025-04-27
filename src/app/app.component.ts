import { Component } from '@angular/core';
import { ListaFerramentasComponent } from './lista-ferramentas/lista-ferramentas.component';
import { ListaClientesComponent } from './components/cliente/cliente.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ListaFerramentasComponent,ListaClientesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-ferramentas-angular';
 
}

