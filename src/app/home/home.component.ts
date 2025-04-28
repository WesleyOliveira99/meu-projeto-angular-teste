import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <h1>Bem-vindo à página Home!</h1>
      <button [routerLink]="'/ferramentas'">Ir para Lista de Ferramentas</button>
      <button [routerLink]="'/clientes'">Ir para Lista de Clientes</button>
    </div>
  `,
  imports: [RouterLink]
})
export class HomeComponent {}
