import { Vendedor } from './../vendedor/vendedor.model';

export interface Cliente{
    id?: number
    nome: string
    codigo: string
    vendedor: Vendedor
}