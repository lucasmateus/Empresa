import { Cliente } from './../cliente/cliente.model';
import { Produto } from './../produto/produto.model';

export interface Vendedor{
    id?: number
    nome: string
    codigo: string
    produtoList: Produto[]
    clienteList: Cliente[]
}