package com.stefanini.aceleraDevs.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Data
public class DadosPessoais {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CPF
    private String cpf;
    @Column(nullable = false)
    private String email;

    public DadosPessoais(Long id, @CPF String cpf, String email) {
        this.id = id;
        this.cpf = cpf;
        this.email = email;
    }
    /* @Column(nullable = false)
    private String telefone;
    @Column(nullable = false)
    private String rg;
    @Column(nullable = false)
    private String rua;
    @Column(nullable = false)
    private String numero;
    @Column(nullable = false)
    private String cidade;
    @Column(nullable = false)
    private String estado;
    @Column(nullable = false)
    private String cep;*/

}
