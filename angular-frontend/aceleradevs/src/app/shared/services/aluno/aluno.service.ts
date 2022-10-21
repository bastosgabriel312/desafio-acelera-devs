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

  convertFormToAluno(formValue:any){
    let aluno = {
      nome: formValue.nome,
      matricula: formValue.matricula,
      cpf: formValue.cpf,
      email: formValue.email,
      idTurma: Number(formValue.turma),
      idCurso:Number(formValue.curso),
      telefone:formValue.telefone,
      rg:formValue.rg,
      endereco:{
        rua:formValue.rua,
        numero:formValue.numero,
        cidade:formValue.cidade,
        estado:formValue.estado,
        cep:formValue.cep
      }
    }
    return aluno;
  }

  createAluno(aluno: any): Observable<Aluno> {
    return this.httpClient.post<any>(
      `${this.API}/aluno`,
      aluno
    );
  }

  updateAluno(id:number,aluno: any): Observable<Aluno> {

    return this.httpClient.put<Aluno>(
      `${this.API}/aluno/${id}`,
      aluno
    );
  }

  deleteAluno(idAluno: number): any {
    return this.httpClient
      .delete<Aluno>(`${this.API}/aluno/${idAluno}`);
  }
}