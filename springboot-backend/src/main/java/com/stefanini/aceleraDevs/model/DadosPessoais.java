package com.stefanini.aceleraDevs.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.br.CPF;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class DadosPessoais {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@CPF(message="CPF inválido.")
	private String cpf;

	@Email
	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private String telefone;

	@Column(nullable = false)
	private String rg;

	@OneToOne(cascade=CascadeType.PERSIST, orphanRemoval = true)
	private Endereco endereco;

	public DadosPessoais() {

	}

	public DadosPessoais(Long id, @CPF String cpf, @Email String email, String telefone, String rg, Endereco endereco) {
		this.id = id;
		this.cpf = cpf;
		this.email = email;
		this.rg = rg;
		this.telefone = telefone;
		this.endereco = endereco;

	}

	public Long getId() {
		return id;
	}

	public String getCpf() {
		return cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

}
