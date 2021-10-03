import { Vendedor } from './../vendedor/vendedor.model';

export interface Produto{
    id?: number
    nome: string
    codigo: string
    vendedor: Vendedor
}