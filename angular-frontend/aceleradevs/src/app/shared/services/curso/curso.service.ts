import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso, Cursos } from '../../model/Curso';
import {DetalheCurso} from '../../model/DetalheCurso';


@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private API = environment.API;

  constructor(
    private httpClient: HttpClient,
  ) {}

  getCursos(): Observable<Cursos> {
    return this.httpClient.get<Cursos>(`${this.API}/curso`);
  }

  getCursoById(id: number | null): Observable<DetalheCurso> {
    return this.httpClient.get<DetalheCurso>(`${this.API}/curso/${id}`);
  }

  createCurso(curso: any): Observable<Curso> {
    return this.httpClient.post<any>(
      `${this.API}/curso`,
      curso
    );
  }

  updateCurso(id:number,curso: any): Observable<DetalheCurso> {
    return this.httpClient.put<DetalheCurso>(
      `${this.API}/curso/${id}`,
      curso
    );
  }

  deleteCurso(id: number): any {
    return this.httpClient
      .delete<DetalheCurso>(`${this.API}/curso/${id}`);
  }

  convertFormToCurso(formValue:any){
    let curso = {
      name: formValue.nome,
      totalGrade: formValue.totalGrade,
    }
    return curso;
  }
}