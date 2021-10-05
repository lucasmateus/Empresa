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

  showMessage(msg: string): void {
    this.snackBar.open(
      msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }
    )
  }

  view(id: string): Observable<Produto>{
    const url = `${this.baseUrl}/${id}`;
    
    return this.http.get<Produto>(url);
  }

  list(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl + "/all")
  }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.baseUrl + "/create", produto)
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/${produto.id}`;

    return this.http.put<Produto>(url, produto);
  }

  delete(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Produto>(url);
  }
}
