package com.stefanini.aceleraDevs.exception;

public class TurmaNaoCondizComDisciplinasDoCursoException extends Exception {
    public TurmaNaoCondizComDisciplinasDoCursoException() {
        super("As disciplinas da turma do aluno não condizem com as disciplinas do curso.");
     }
}
