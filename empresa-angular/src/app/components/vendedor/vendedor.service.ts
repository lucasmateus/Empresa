import { Vendedor } from './vendedor.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  baseUrl = "http://localhost:8080/vendedor"

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

  create(vendedor: Vendedor): Observable<Vendedor>{
    return this.http.post<Vendedor>(this.baseUrl + "/create", vendedor);
  }

  list(): Observable<Vendedor[]>{
    return this.http.get<Vendedor[]>(this.baseUrl + "/all");
  }

  view(id: string): Observable<Vendedor>{
    const url = `${this.baseUrl}/${id}`;
    
    return this.http.get<Vendedor>(url);
  }

  update(vendedor: Vendedor): Observable<Vendedor> {
    const url = `${this.baseUrl}/${vendedor.id}`;

    return this.http.put<Vendedor>(url, vendedor);
  }

  delete(id: number): Observable<Vendedor> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Vendedor>(url);
  }
}
