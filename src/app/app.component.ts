import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importando RouterOutlet para usá-lo no template

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>  <!-- Isso renderiza o conteúdo da rota ativa -->
  `,
  imports: [RouterOutlet]  // Incluindo o RouterOutlet aqui
})
export class AppComponent {
  title = 'lista-ferramentas-angular';
 
}

