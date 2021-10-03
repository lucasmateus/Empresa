import { Vendedor } from './../vendedor.model';
import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-vendedorcreate',
  templateUrl: './vendedorcreate.component.html',
  styleUrls: ['./vendedorcreate.component.css']
})
export class VendedorcreateComponent implements OnInit {

  vendedor: Vendedor = {
    nome: "",
    codigo: "",
    produtoList: [],
    clienteList: []
  }

  constructor(private VendedorService: VendedorService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createVendedor(): void {
    console.log(this.vendedor)
    this.VendedorService.create(this.vendedor).subscribe(() => {
        this.VendedorService.showMessage('Vendedor criado com sucesso!')
        this.router.navigate(['vendedor'])    
      }
    )
  }

  cancel(): void {
    this.router.navigate(['vendedor'])
  }
}
