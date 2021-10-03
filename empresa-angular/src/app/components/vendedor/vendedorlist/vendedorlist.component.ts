import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../vendedor.model';

@Component({
  selector: 'app-vendedorlist',
  templateUrl: './vendedorlist.component.html',
  styleUrls: ['./vendedorlist.component.css']
})
export class VendedorlistComponent implements OnInit {

  vendedorList: Vendedor[]

  displayedColumns: string[] = ['id', 'nome', 'codigo', 'acoes'];

  constructor(private VendedorService: VendedorService) {
    this.vendedorList = [];
   }

  ngOnInit(): void {
    this.VendedorService.list().subscribe(listVendedor => {
      this.vendedorList = listVendedor
    })
  }

}
