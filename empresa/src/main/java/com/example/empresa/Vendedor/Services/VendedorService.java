package com.example.empresa.Vendedor.Services;

import com.example.empresa.Cliente.Models.Cliente;
import com.example.empresa.Produto.Models.Produto;
import com.example.empresa.Vendedor.Models.Vendedor;
import com.example.empresa.Vendedor.Repositories.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendedorService {

    @Autowired
    private VendedorRepository vendedorRepository;

    public List<Produto> findAllProdutosByVendedor(Long id) {
        Vendedor vendedor = vendedorRepository.getById(id);

        return vendedor.getProdutoList();
    }

    public List<Cliente> findAllClientesByVendedor(Long id) {
        Vendedor vendedor = vendedorRepository.getById(id);

        return vendedor.getClienteList();
    }

    public List<Vendedor> findAll() {

        return vendedorRepository.findAll();
    }

    public Vendedor create(Vendedor vendedor) {
        vendedor.setId(null);

        return vendedorRepository.save(vendedor);
    }

    public Vendedor findById(Long id){
        Vendedor vendedor = vendedorRepository.findById(id).orElseThrow();

        return vendedor;
    }

    public void deleteById(Long id) {
        vendedorRepository.deleteById(id);
    }

    public Vendedor update(Vendedor vendedor) {
        Vendedor newObj = findById(vendedor.getId());
        if(vendedor.getNome() != null){
            newObj.setNome(vendedor.getNome());
        }
        if(vendedor.getCodigo() != null){
            newObj.setCodigo(vendedor.getCodigo());
        }
        vendedorRepository.save(newObj);

        return newObj;
    }
}
