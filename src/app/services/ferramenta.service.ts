import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ferramentas{
    id: number;
    nome: string;
    descricao: string;
    potencia: string;
    fornecedor: string;
}

@Injectable({
    providedIn: 'root'
})
export class ferramentaService {
    private apiUrl = 'http://localhost:3000/ferramentas';

    constructor(private http:HttpClient){}

    listarFerramentas(): Observable<Ferramentas[]>{
        return this.http.get<Ferramentas[]>(this.apiUrl);
    }

    adicionarFerramentas(ferramenta: Omit<Ferramentas, 'id'>): Observable<Ferramentas> {
        return this.http.post<Ferramentas>(this.apiUrl, ferramenta); // Envia a ferramenta sem o 'id'
    }
    
    deletarFerramentas(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}