package com.example.empresa.Cliente.Models;

import com.example.empresa.Vendedor.Models.Vendedor;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@Entity
@Table(name = "cliente")
public class Cliente implements Serializable {

    private static final long serialVersionUID = -5032185443668471886L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true)
    private String codigo;

    @ManyToOne
    @JoinColumn(name = "vendedor_id")
    @JsonBackReference
    private Vendedor vendedor;

    public Cliente(){}

    public Cliente(Long id, String nome, String codigo, Vendedor vendedor) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.vendedor = vendedor;
    }
}
