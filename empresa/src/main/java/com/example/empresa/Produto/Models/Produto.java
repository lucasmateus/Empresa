package com.example.empresa.Produto.Models;

import com.example.empresa.Vendedor.Models.Vendedor;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@Entity
@Table(name = "produto")
public class Produto implements Serializable {

    private static final long serialVersionUID = -517084825649097663L;

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

    public Produto(){}

    public Produto(Long id, String nome, String codigo, Vendedor vendedor) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.vendedor = vendedor;
    }
}
