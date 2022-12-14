import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Turma, Turmas } from '../../model/Turma';
import { DetalheTurma} from '../../model/DetalheTurma';


@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  private API = environment.API;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getTurmas(): Observable<Turmas> {
    return this.httpClient.get<Turmas>(`${this.API}/turma`);
  }

  getTurmaById(id: number | null): Observable<DetalheTurma> {
    return this.httpClient.get<DetalheTurma>(`${this.API}/turma/${id}`);
  }

  createTurma(curso: any): Observable<Turma> {
    return this.httpClient.post<any>(
      `${this.API}/turma`,
      curso
    );
  }

  updateTurma(id:number,turma: any): Observable<DetalheTurma> {
    return this.httpClient.put<DetalheTurma>(
      `${this.API}/turma/${id}`,
      turma
    );
  }

  deleteTurma(id: number): any {
    return this.httpClient
      .delete<Turma>(`${this.API}/turma/${id}`);
  }

  convertFormToTurma(formValue:any){
    let turma = {
      nome: formValue.nome
    }
    return turma;
  }
}