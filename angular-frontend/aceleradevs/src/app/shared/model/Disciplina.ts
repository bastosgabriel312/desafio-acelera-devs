export interface Disciplina {
    id: number;
    nome:number;
    codigo: number;
    conteudoProgramatico: number;
    numeroCreditos: number;
    totalHoras: number;
    turma: number;
    curso: number;
    
}

export type Disciplinas = Array<Disciplina>;