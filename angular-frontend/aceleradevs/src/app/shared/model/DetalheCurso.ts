import { Disciplinas } from "./Disciplina";

export interface DetalheCurso {
    id: number;
    name:string;
    totalGrade:number;
    disciplinas:Disciplinas;
}
