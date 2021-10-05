import { VendedorDeleteComponent } from './components/vendedor/vendedor-delete/vendedor-delete.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { VendedorUpdateComponent } from './components/vendedor/vendedor-update/vendedor-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { VendedorItemComponent } from './components/vendedor/vendedor-item/vendedor-item.component';
import { VendedorcreateComponent } from './components/vendedor/vendedorcreate/vendedorcreate.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VendedorComponent } from './views/vendedor/vendedor.component'
import { ClienteComponent } from './views/cliente/cliente.component'
import { ProdutoComponent } from './views/produto/produto.component'
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "vendedor",
    component: VendedorComponent
  },
  {
    path: "vendedor/create",
    component: VendedorcreateComponent
  },
  {
    path: "vendedor/view/:id",
    component: VendedorItemComponent
  },
  {
    path: "vendedor/update/:id",
    component: VendedorUpdateComponent
  },
  {
    path: "vendedor/delete/:id",
    component: VendedorDeleteComponent
  },
  {
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "cliente/delete/:id",
    component: ClienteDeleteComponent
  },
  {
    path: "produto",
    component: ProdutoComponent
  },
  {
    path: "produto/update/:id",
    component: ProdutoUpdateComponent
  },
  {
    path: "produto/create",
    component: ProdutoCreateComponent
  },
  {
    path: "produto/delete/:id",
    component: ProdutoDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
