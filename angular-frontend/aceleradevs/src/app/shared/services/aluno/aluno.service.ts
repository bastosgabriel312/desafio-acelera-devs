import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno, Alunos } from '../../model/Aluno';


@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private API = environment.API;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getAlunos(): Observable<Alunos> {
    return this.httpClient.get<Alunos>(`${this.API}/aluno`);
  }

  getAlunoById(id: number | null): Observable<Aluno> {
    return this.httpClient.get<Aluno>(`${this.API}/aluno/${id}`);
  }

  updateAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.put<Aluno>(
      `${this.API}/aluno/${aluno.id}`,
      aluno
    );
  }

  deletarAluno(aluno: Aluno): any {
    return this.httpClient
      .delete<Aluno>(`${this.API}/aluno/${aluno.id}`);
  }
}