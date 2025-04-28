import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ferramentaService, Ferramentas } from '../services/ferramenta.service';

@Component({
  selector: 'app-lista-ferramentas',
  templateUrl: './lista-ferramentas.component.html',
  styleUrls: ['./lista-ferramentas.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ListaFerramentasComponent implements OnInit {
  ferramentas: Ferramentas[] = [];

  nome: string = '';
  descricao: string = '';
  potencia: string = '';
  fornecedor: string = '';
  showModalSucesso: boolean = false;

  constructor(private ferramentaService: ferramentaService) {}

  ngOnInit(): void {
    this.carregarFerramentas();
  }

  carregarFerramentas(): void {
    this.ferramentaService.listarFerramentas().subscribe({
      next: (dados: Ferramentas[]) => {
        this.ferramentas = dados;
      },
      error: (error: any) => {
        console.error('Erro ao buscar ferramentas', error);
      }
    });
  }

  deletarFerramenta(id: number): void {
    this.ferramentaService.deletarFerramentas(id).subscribe({
      next: () => {
        console.log('Ferramenta excluída com sucesso');
        this.ferramentas = this.ferramentas.filter(f => f.id !== id);
      },
      error: (error: any) => {
        console.error('Erro ao excluir ferramenta', error);
      }
    });
  }

  adicionarFerramenta(): void {
    const novaFerramenta: Omit<Ferramentas, 'id'> = {
      nome: this.nome,
      descricao: this.descricao,
      potencia: this.potencia,
      fornecedor: this.fornecedor
    };
  
    this.ferramentaService.adicionarFerramentas(novaFerramenta).subscribe({
      next: (novaFerramentaCriada: Ferramentas) => {
        console.log('Ferramenta adicionada com sucesso!');
        this.showModalSucesso = true;
  
        // Adicionar a nova ferramenta diretamente à lista no frontend
        this.ferramentas.push(novaFerramentaCriada);
  
        // Resetar o formulário
        this.resetForm();
  
        setTimeout(() => {
          this.showModalSucesso = false;
        }, 2000);
      },
      error: (error: any) => {
        console.error('Não foi possível adicionar a ferramenta', error);
      }
    });
  }
  

  resetForm(): void {
    this.nome = '';
    this.descricao = '';
    this.potencia = '';
    this.fornecedor = '';
  }

  verifyForm(): boolean {
    return !!(this.nome && this.descricao && this.potencia && this.fornecedor);
  }

  showSucessModal() {
    // opcional, caso queira implementar algo visual
  }
}
