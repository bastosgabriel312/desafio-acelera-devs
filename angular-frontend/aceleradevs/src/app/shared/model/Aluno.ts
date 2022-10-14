import { Curso } from "./Curso";
import { Endereco } from "./Endereco";
import { Turma } from "./Turma";

export interface Aluno {
	id: number;
	nome: string;
	matricula: string;
	cpf: string;
	email: string;
	telefone: string;
	rg: string;
	turma: Turma;
	curso: Curso;
    endereco: Endereco;
}

export type Alunos = Array<Aluno>;

