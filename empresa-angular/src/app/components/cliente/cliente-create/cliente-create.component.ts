import { Router } from '@angular/router';
import { VendedorService } from './../../vendedor/vendedor.service';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../vendedor/vendedor.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: "",
    codigo: "",
    vendedor: {
      id: undefined,
      nome: '',
      codigo: '',
      produtoList: [],
      clienteList: []
    }
  }

  vendedorList: Vendedor[]

  constructor(private clienteService: ClienteService ,private VendedorService: VendedorService, private router: Router) { 
    this.vendedorList = []
  }

  ngOnInit(): void {
    this.VendedorService.list().subscribe(listVendedor => {
      this.vendedorList = listVendedor
    })
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
        this.clienteService.showMessage('Cliente criado com sucesso!')
        this.router.navigate(['cliente'])  
    })
  }

  cancel(): void {
    this.router.navigate(['cliente'])
  }

}
