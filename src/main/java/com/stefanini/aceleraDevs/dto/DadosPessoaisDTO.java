package com.stefanini.aceleraDevs.dto;

import org.hibernate.validator.constraints.br.CPF;

public class DadosPessoaisDTO {


    @CPF
    private String cpf;

    private String email;

    public DadosPessoaisDTO() {
    }

    public DadosPessoaisDTO( @CPF String cpf, String email) {

        this.cpf = cpf;
        this.email = email;
    }

       public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
