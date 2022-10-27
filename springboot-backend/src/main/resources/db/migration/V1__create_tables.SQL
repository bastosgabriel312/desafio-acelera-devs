-- public.curso definition

-- Drop table

-- DROP TABLE public.curso;

CREATE TABLE public.curso (
	id bigserial NOT NULL,
	"name" varchar(255) NULL,
	total_grade int4 NULL,
	enabled bool NOT NULL DEFAULT true,
	CONSTRAINT curso_pkey PRIMARY KEY (id)
);


-- public.endereco definition

-- Drop table

-- DROP TABLE public.endereco;

CREATE TABLE public.endereco (
	id bigserial NOT NULL,
	cep varchar(255) NOT NULL,
	cidade varchar(255) NOT NULL,
	estado varchar(255) NOT NULL,
	numero varchar(255) NOT NULL,
	rua varchar(255) NOT NULL,
	CONSTRAINT endereco_pkey PRIMARY KEY (id)
);


-- public.turma definition

-- Drop table

-- DROP TABLE public.turma;

CREATE TABLE public.turma (
	id bigserial NOT NULL,
	nome varchar(255) NULL,
	enabled bool NOT NULL DEFAULT true,
	CONSTRAINT turma_pkey PRIMARY KEY (id)
);


-- public.dados_pessoais definition

-- Drop table

-- DROP TABLE public.dados_pessoais;

CREATE TABLE public.dados_pessoais (
	id bigserial NOT NULL,
	cpf varchar(255) NULL,
	email varchar(255) NOT NULL,
	rg varchar(255) NOT NULL,
	telefone varchar(255) NOT NULL,
	endereco_id int8 NULL,
	CONSTRAINT dados_pessoais_pkey PRIMARY KEY (id),
	CONSTRAINT fkasbsuxw1g5ycl1wmrtdlr090v FOREIGN KEY (endereco_id) REFERENCES public.endereco(id)
);


-- public.disciplina definition

-- Drop table

-- DROP TABLE public.disciplina;

CREATE TABLE public.disciplina (
	id bigserial NOT NULL,
	codigo varchar(255) NOT NULL,
	conteudo_programatico varchar(255) NOT NULL,
	nome varchar(255) NOT NULL,
	numero_creditos int4 NOT NULL,
	total_horas int4 NULL,
	curso_id int8 NULL,
	turma_id int8 NULL,
	CONSTRAINT disciplina_pkey PRIMARY KEY (id),
	CONSTRAINT fkfye6gx28bftfg2xmxomp60te0 FOREIGN KEY (turma_id) REFERENCES public.turma(id),
	CONSTRAINT fkkhdiw1swjoa2ml3md0mt8g4sf FOREIGN KEY (curso_id) REFERENCES public.curso(id)
);


-- public.aluno definition

-- Drop table

-- DROP TABLE public.aluno;

CREATE TABLE public.aluno (
	id bigserial NOT NULL,
	matricula varchar(255) NOT NULL,
	nome varchar(255) NOT NULL,
	dados_pessoais_id int8 NULL,
	turma_id int8 NULL,
	curso_id int8 NULL,
	CONSTRAINT aluno_pkey PRIMARY KEY (id),
	CONSTRAINT fk9o09o8qj4x9uf9okvf622jyec FOREIGN KEY (curso_id) REFERENCES public.curso(id),
	CONSTRAINT fkehtgr8rih20h4gomh4dd4sbxu FOREIGN KEY (turma_id) REFERENCES public.turma(id),
	CONSTRAINT fkogicab2jsr5tvqj0j35ioudv1 FOREIGN KEY (dados_pessoais_id) REFERENCES public.dados_pessoais(id)
);
