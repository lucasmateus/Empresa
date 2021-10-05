import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { VendedorComponent } from './views/vendedor/vendedor.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { VendedorcreateComponent } from './components/vendedor/vendedorcreate/vendedorcreate.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { VendedorlistComponent } from './components/vendedor/vendedorlist/vendedorlist.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { VendedorItemComponent } from './components/vendedor/vendedor-item/vendedor-item.component';
import { VendedorUpdateComponent } from './components/vendedor/vendedor-update/vendedor-update.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { VendedorDeleteComponent } from './components/vendedor/vendedor-delete/vendedor-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    VendedorComponent,
    ClienteComponent,
    ProdutoComponent,
    VendedorcreateComponent,
    VendedorlistComponent,
    ProdutoCreateComponent,
    ClienteCreateComponent,
    ProdutoListComponent,
    ClienteListComponent,
    VendedorItemComponent,
    VendedorUpdateComponent,
    ProdutoUpdateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ProdutoDeleteComponent,
    VendedorDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
