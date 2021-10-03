import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtoList: Produto[]

  displayedColumns: string[] = ['id', 'nome', 'codigo'];

  constructor(private ProdutoService: ProdutoService) { this.produtoList = [] }

  ngOnInit(): void {
    this.ProdutoService.list().subscribe(produtoList => {
      this.produtoList = produtoList
    })
  }

}
