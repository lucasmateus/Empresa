import { Vendedor } from './../vendedor.model';
import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-delete',
  templateUrl: './vendedor-delete.component.html',
  styleUrls: ['./vendedor-delete.component.css']
})
export class VendedorDeleteComponent implements OnInit {

  vendedor!: Vendedor;

  constructor(private vendedorService: VendedorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ' ';
    this.vendedorService.view(id).subscribe( vendedor => {
      this.vendedor = vendedor;
    });
  }

  deleteVendedor(): void {
    this.vendedorService.delete(this.vendedor.id!).subscribe(() => {
        this.vendedorService.showMessage('Vendedor deletado com sucesso!');
        this.router.navigate(['vendedor']);
    })
  }

  cancel(): void {
    this.router.navigate(['vendedor']);
  }

}
