package com.example.empresa.Vendedor.Repositories;

import com.example.empresa.Vendedor.Models.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor, Long> {
}
