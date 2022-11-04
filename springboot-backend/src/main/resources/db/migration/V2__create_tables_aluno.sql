-- public.endereco definition

-- Drop table

-- DROP TABLE public.endereco;

CREATE TABLE IF NOT EXISTS public.endereco (
	id bigserial NOT NULL,
	cep varchar(255) NOT NULL,
	cidade varchar(255) NOT NULL,
	estado varchar(255) NOT NULL,
	numero varchar(255) NOT NULL,
	rua varchar(255) NOT NULL,
	CONSTRAINT endereco_pkey PRIMARY KEY (id)
);


-- public.dados_pessoais definition

-- Drop table

-- DROP TABLE public.dados_pessoais;

CREATE TABLE IF NOT EXISTS public.dados_pessoais (
	id bigserial NOT NULL,
	cpf varchar(255) NULL,
	email varchar(255) NOT NULL,
	rg varchar(255) NOT NULL,
	telefone varchar(255) NOT NULL,
	endereco_id int8 NULL,
	CONSTRAINT dados_pessoais_pkey PRIMARY KEY (id),
	CONSTRAINT fkasbsuxw1g5ycl1wmrtdlr090v FOREIGN KEY (endereco_id) REFERENCES public.endereco(id)
);

-- public.aluno definition

-- Drop table

-- DROP TABLE public.aluno;

CREATE TABLE IF NOT EXISTS public.aluno (
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
