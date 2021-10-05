import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto!: Produto

  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ' ';
    this.produtoService.view(id).subscribe( produto => {
      this.produto = produto;
    });
  }

  deleteProduto(): void {
    this.produtoService.delete(this.produto.id!).subscribe(() => {
        this.produtoService.showMessage('Produto deletado com sucesso!');
        this.router.navigate(['produto']);
    })
  }

  cancel(): void {
    this.router.navigate(['produto']);
  }
}
