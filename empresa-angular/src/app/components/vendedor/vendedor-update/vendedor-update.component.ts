import { Vendedor } from './../vendedor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor-update',
  templateUrl: './vendedor-update.component.html',
  styleUrls: ['./vendedor-update.component.css']
})
export class VendedorUpdateComponent implements OnInit {

  vendedor!: Vendedor;

  constructor(private vendedorService: VendedorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ' ';
    this.vendedorService.view(id).subscribe( vendedor => {
      this.vendedor = vendedor;
    });
  }

  updateVendedor(): void {
    this.vendedorService.update(this.vendedor).subscribe(() => {
      this.vendedorService.showMessage('Vendedor atualizado com sucesso!');
      this.router.navigate(['/vendedor']);
    })
  }

  cancel(): void {
    this.router.navigate(['/vendedor']);
  }

}
