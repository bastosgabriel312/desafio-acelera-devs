-- public.curso definition

-- Drop table

-- DROP TABLE public.curso;

CREATE TABLE IF NOT EXISTS public.curso (
	id bigserial NOT NULL,
	name varchar(255) NULL,
	total_grade int4 NULL,
	enabled bool NOT NULL DEFAULT true,
	CONSTRAINT curso_pkey PRIMARY KEY (id)
);

-- public.turma definition

-- Drop table

-- DROP TABLE public.turma;

CREATE TABLE IF NOT EXISTS public.turma (
	id bigserial NOT NULL,
	nome varchar(255) NULL,
	enabled bool NOT NULL DEFAULT true,
	CONSTRAINT turma_pkey PRIMARY KEY (id)
);


-- public.disciplina definition

-- Drop table

-- DROP TABLE public.disciplina;

CREATE TABLE IF NOT EXISTS public.disciplina (
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



