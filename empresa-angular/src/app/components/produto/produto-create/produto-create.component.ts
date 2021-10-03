import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Vendedor } from './../../vendedor/vendedor.model';
import { Produto } from '../produto.model';
import { VendedorService } from './../../vendedor/vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
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

  constructor(private produtoService: ProdutoService, private VendedorService: VendedorService, private router: Router) {
    this.vendedorList = []
   }

  ngOnInit(): void {
    this.VendedorService.list().subscribe(listVendedor => {
      this.vendedorList = listVendedor
    })
  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
        this.VendedorService.showMessage('Produto criado com sucesso!')
        this.router.navigate(['produto'])  
    })
  }

  cancel(): void {
    this.router.navigate(['produto'])
  }
}
