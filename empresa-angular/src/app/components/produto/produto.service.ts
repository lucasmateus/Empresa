import { Produto } from './produto.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:8080/produto"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  list(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl + "/all")
  }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.baseUrl + "/create", produto)
  }
}
