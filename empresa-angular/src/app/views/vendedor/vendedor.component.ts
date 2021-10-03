import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToVendedorCreate(): void{
    this.router.navigate(['vendedor/create'])
  }
}
