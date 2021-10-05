package com.example.empresa.Vendedor.Controllers;

import com.example.empresa.Cliente.Models.Cliente;
import com.example.empresa.Produto.Models.Produto;
import com.example.empresa.Vendedor.Models.Vendedor;
import com.example.empresa.Vendedor.Services.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/vendedor")
public class VendedorController {

    @Autowired
    private VendedorService vendedorService;

    @GetMapping(value = "/{id}/produtos")
    public ResponseEntity<?> findAllProdutosByVendedor(@PathVariable Long id){
        List<Produto> produtoList = vendedorService.findAllProdutosByVendedor(id);

        return ResponseEntity.ok().body(produtoList);
    }

    @GetMapping(value = "/{id}/clientes")
    public ResponseEntity<?> findAllClientesByVendedor(@PathVariable Long id){
        List<Cliente> clienteList = vendedorService.findAllClientesByVendedor(id);

        return ResponseEntity.ok().body(clienteList);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<?> findAll(){
        List<Vendedor> vendedorList = vendedorService.findAll();

        return ResponseEntity.ok().body(vendedorList);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Void> create(@RequestBody Vendedor vendedor){
        vendedor = vendedorService.create(vendedor);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(vendedor.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Vendedor vendedor = vendedorService.findById(id);

        return ResponseEntity.ok().body(vendedor);
    }


    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        vendedorService.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    //Atualizar por id
    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> updateById(@PathVariable Long id, @RequestBody Vendedor vendedor){
        vendedor.setId(id);

        vendedor = vendedorService.update(vendedor);

        return ResponseEntity.noContent().build();
    }
}
