package com.example.empresa.Cliente.Services;

import com.example.empresa.Cliente.Models.Cliente;
import com.example.empresa.Cliente.Repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> findAll() {

        return clienteRepository.findAll();
    }

    public Cliente create(Cliente cliente) {
        cliente.setId(null);

        return clienteRepository.save(cliente);
    }

    public void deleteById(Long id) {
        clienteRepository.deleteById(id);
    }

    public Cliente update(Cliente cliente) {
        Cliente newObj = findById(cliente.getId());
        if(cliente.getNome() != null){
            newObj.setNome(cliente.getNome());
        }
        if(cliente.getCodigo() != null){
            newObj.setCodigo(cliente.getCodigo());
        }
        clienteRepository.save(newObj);

        return newObj;
    }

    public Cliente findById(Long id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow();

        return cliente;
    }
}
