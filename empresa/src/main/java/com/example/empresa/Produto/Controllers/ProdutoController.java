package com.example.empresa.Produto.Controllers;

import com.example.empresa.Produto.Models.Produto;
import com.example.empresa.Produto.Services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/all")
    public ResponseEntity<?> findAll(){
        List<Produto> produtoList = produtoService.findAll();

        return ResponseEntity.ok().body(produtoList);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> create(@RequestBody Produto produto){
        produto = produtoService.create(produto);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(produto.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    //Deletar por Id
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        produtoService.deleteById(id);

        return ResponseEntity.ok().body("Deletado");
    }

    //Atualizar por id
    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> updateById(@PathVariable Long id, @RequestBody Produto produto){
        produto.setId(id);

        produto = produtoService.update(produto);

        return ResponseEntity.noContent().build();
    }
}
