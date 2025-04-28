import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente, ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  standalone: true
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  nome: string = '';
  dataNascimento: Date = new Date();
  cpf: string = '';
  telefone: string = '';
  showModalSucesso: boolean = false;
  

  constructor(private ClienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.ClienteService.listarClientes().subscribe({
      next: (dados: Cliente[]) => {
        this.clientes = dados;
      },
      error: (error: any) => {
        console.error('Erro ao buscar ferramentas', error);
      }
    });
  }

  deletarCliente(id: number): void {
    this.ClienteService.deletarCliente(id).subscribe({
      next: () => {
        console.log('Ferramenta excluída com sucesso');
        this.clientes = this.clientes.filter(f => f.id !== id);
      },
      error: (error: any) => {
        console.error('Erro ao excluir ferramenta', error);
      }
    });
  }

  adicionarCliente(): void {
    const novoCliente: Omit<Cliente, 'id'> = {
      nome: this.nome,
      dataNascimento: this.dataNascimento,  // Agora vai ter o formato correto
      cpf: this.cpf,
      telefone: this.telefone
    };
  
    this.ClienteService.criarCliente(novoCliente).subscribe({
      next: (clienteAdicionado: Cliente) => {
        console.log('Cliente adicionado com sucesso!');
        this.showModalSucesso = true;
  
        // Adiciona o cliente à lista existente sem substituí-la
        this.clientes.push(clienteAdicionado);
  
        // Resetar o formulário
        this.resetForm();
  
        // Fechar o modal após 2 segundos
        setTimeout(() => {
          this.showModalSucesso = false;
        }, 2000);
      },
      error: (error: any) => {
        console.error('Erro ao adicionar cliente', error);
      }
    });
  }
  

  resetForm(): void {
    this.nome = '';
    this.dataNascimento = new Date();
    this.cpf = '';
    this.telefone = '';
  }

  verifyForm(): boolean {
    return !!(this.nome && this.dataNascimento && this.cpf && this.telefone);
  }

  showSucessModal() {
    // opcional, caso queira implementar algo visual
  }
}