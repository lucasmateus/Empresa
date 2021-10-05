import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clienteList: Cliente[]

  displayedColumns: string[] = ['id', 'nome', 'codigo', 'acoes'];

  constructor(private clienteService: ClienteService) { 
    this.clienteList = []
  }

  ngOnInit(): void {
    this.clienteService.list().subscribe(clienteList => {
      this.clienteList = clienteList
    })
  }

  delete(id: number): void {
    this.clienteService.delete(id);
  }

}
