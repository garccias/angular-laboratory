import { IAddress } from "./address.interface";
import { IStatus } from "./status.interface";


export interface IUser {

    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: IAddress;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string; // ISO 8601
    status: IStatus; 
}