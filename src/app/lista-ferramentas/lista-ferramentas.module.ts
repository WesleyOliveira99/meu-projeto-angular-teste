import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFerramentasComponent } from './lista-ferramentas.component';

@NgModule({
  declarations: [ListaFerramentasComponent],
  imports: [CommonModule],
  exports: [ListaFerramentasComponent]
})
export class ListaFerramentasModule {}
