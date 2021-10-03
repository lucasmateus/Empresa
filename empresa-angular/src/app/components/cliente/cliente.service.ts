import { Cliente } from './cliente.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/cliente"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  list(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl + "/all")
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl + "/create", cliente)
  }
}
