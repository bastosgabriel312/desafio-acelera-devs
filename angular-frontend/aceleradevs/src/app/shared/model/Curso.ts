import { Disciplinas } from "./Disciplina";

export interface Curso {
    id: number;
    name:string;
    totalGrade:number;
    disciplinas:Disciplinas;
}

export type Cursos = Array<Curso>;