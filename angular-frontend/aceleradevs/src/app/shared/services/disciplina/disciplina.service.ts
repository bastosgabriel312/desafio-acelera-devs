import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disciplina, Disciplinas } from '../../model/Disciplina';

@Injectable({
    providedIn: 'root',
  })
export class DisciplinaService {
    private API = environment.API;

    constructor(
      private httpClient: HttpClient,
    ) {}
  
    getDisciplinas(): Observable<Disciplinas> {
      return this.httpClient.get<Disciplinas>(`${this.API}/disciplina`);
    }
  
    getDisciplinaById(id: number | null): Observable<Disciplina> {
      return this.httpClient.get<Disciplina>(`${this.API}/disciplina/${id}`);
    }
  
    createDisciplina(disciplina: any): Observable<Disciplina> {
      return this.httpClient.post<any>(
        `${this.API}/disciplina`,
        disciplina
      );
    }
  
    updateDisciplina(id:number,disciplina: any): Observable<Disciplina> {
      return this.httpClient.put<Disciplina>(
        `${this.API}/disciplina/${id}`,
        disciplina
      );
    }
  
    deleteDisciplina(idDisciplina: number): any {
      return this.httpClient
        .delete<Disciplina>(`${this.API}/disciplina/${idDisciplina}`);
    }
  }

