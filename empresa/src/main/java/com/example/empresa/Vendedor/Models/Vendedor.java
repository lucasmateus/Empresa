package com.example.empresa.Vendedor.Models;

import com.example.empresa.Cliente.Models.Cliente;
import com.example.empresa.Produto.Models.Produto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "vendedor")
public class Vendedor implements Serializable {

    private static final long serialVersionUID = -2679730415664918091L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String nome;

    @Getter
    @Setter
    @Column(unique=true)
    private String codigo;

    @JsonManagedReference
    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL)
    private List<Produto> produtoList;

    @JsonManagedReference
    @OneToMany(mappedBy = "vendedor", cascade = CascadeType.ALL)
    private List<Cliente> clienteList;

    public Vendedor() {}

    public Vendedor(Long id, String nome, String codigo, List<Produto> produtoList, List<Cliente> clienteList) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.produtoList = produtoList;
        this.clienteList = clienteList;
    }

    public List<Produto> getProdutoList() {
        return produtoList;
    }

    public void setProdutoList(List<Produto> produtoList) {
        this.produtoList = produtoList;
    }

    public List<Cliente> getClienteList() {
        return clienteList;
    }

    public void setClienteList(List<Cliente> clienteList) {
        this.clienteList = clienteList;
    }
}
