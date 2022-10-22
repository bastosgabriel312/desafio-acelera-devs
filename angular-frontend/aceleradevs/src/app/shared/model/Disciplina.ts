import { Curso } from "./Curso";
import { Turma } from "./Turma";

export interface Disciplina {
    id: number;
    nome:string;
    codigo: string;
    conteudoProgramatico: string;
    numeroCreditos: number;
    totalHoras: number;
    turma: Turma;
    curso: Curso;
    
}

export type Disciplinas = Array<Disciplina>;