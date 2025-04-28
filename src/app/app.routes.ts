import { Routes } from '@angular/router';
import { ListaFerramentasComponent } from './lista-ferramentas/lista-ferramentas.component';
import { HomeComponent } from './home/home.component';  // Certifique-se de importar o HomeComponent
import { ListaClientesComponent } from './components/cliente/cliente.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Página inicial
  { path: 'ferramentas', component: ListaFerramentasComponent }, // Página de ferramentas
  { path: 'clientes', component: ListaClientesComponent },  // Página de clientes
  { path: '**', redirectTo: '' }  // Redireciona para a página inicial se a rota não for encontrada
];
