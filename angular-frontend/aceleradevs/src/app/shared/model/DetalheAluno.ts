import { Endereco } from "./Endereco";

export interface DetalheAluno {
	id: number;
	nome: string;
	matricula: string;
	cpf: string;
	email: string;
	telefone: string;
	rg: string;
	idTurma: number;
	idCurso: number;
    endereco: Endereco;
}



