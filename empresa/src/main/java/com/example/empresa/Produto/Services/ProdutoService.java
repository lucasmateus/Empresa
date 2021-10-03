package com.example.empresa.Produto.Services;

import com.example.empresa.Produto.Models.Produto;
import com.example.empresa.Produto.Repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;


    public List<Produto> findAll() {

        return produtoRepository.findAll();
    }

    public Produto create(Produto produto) {
        produto.setId(null);

        return produtoRepository.save(produto);
    }

    public void deleteById(Long id) {
        produtoRepository.deleteById(id);
    }

    public Produto update(Produto produto) {
        Produto newObj = findById(produto.getId());
        if(produto.getNome() != null){
            newObj.setNome(produto.getNome());
        }
        if(produto.getCodigo() != null){
            newObj.setCodigo(produto.getCodigo());
        }
        produtoRepository.save(newObj);

        return newObj;
    }

    private Produto findById(Long id) {
        Produto produto = produtoRepository.findById(id).orElseThrow();

        return produto;
    }
}
