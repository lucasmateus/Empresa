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
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "produto",
    component: ProdutoComponent
  },
  {
    path: "produto/create",
    component: ProdutoCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
