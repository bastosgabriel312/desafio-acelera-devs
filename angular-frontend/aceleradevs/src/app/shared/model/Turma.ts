import { Alunos } from "./Aluno";
import { Disciplinas } from "./Disciplina";

export interface Turma {
    id: number;
    nome:string;
    disciplinas: Disciplinas;
    alunos: Alunos;
}


export type Turmas = Array<Turma>;