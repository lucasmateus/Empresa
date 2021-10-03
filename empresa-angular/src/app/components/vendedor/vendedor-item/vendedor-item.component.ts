import { Vendedor } from './../vendedor.model';
import { VendedorService } from './../vendedor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendedor-item',
  templateUrl: './vendedor-item.component.html',
  styleUrls: ['./vendedor-item.component.css']
})
export class VendedorItemComponent implements OnInit {

  vendedor!: Vendedor;

  constructor(private VendedorService: VendedorService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || ' '

    this.VendedorService.view(id).subscribe(vendedor => {
      this.vendedor = vendedor
    })
  }

}
