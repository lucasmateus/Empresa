package com.example.empresa.Cliente.Controllers;

import com.example.empresa.Cliente.Models.Cliente;
import com.example.empresa.Cliente.Services.ClienteService;
import com.example.empresa.Produto.Models.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping("/all")
    public ResponseEntity<?> findAll(){
        List<Cliente> clienteList = clienteService.findAll();

        return ResponseEntity.ok().body(clienteList);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Cliente cliente = clienteService.findById(id);

        return ResponseEntity.ok().body(cliente);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> create(@RequestBody Cliente cliente){
        cliente = clienteService.create(cliente);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cliente.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        clienteService.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    //Atualizar por id
    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> updateById(@PathVariable Long id, @RequestBody Cliente cliente){
        cliente.setId(id);

        cliente = clienteService.update(cliente);

        return ResponseEntity.noContent().build();
    }
}
