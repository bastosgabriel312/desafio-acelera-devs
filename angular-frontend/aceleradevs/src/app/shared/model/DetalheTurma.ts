import { Alunos } from "./Aluno";
import { Disciplinas } from "./Disciplina";

export interface DetalheTurma {
    id: number;
    nome:string;
    alunos:Alunos;
    disciplina: Disciplinas;
}
