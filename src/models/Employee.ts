import { Sale } from "./Sale";

export interface Employee {
    id: number;                 // Identificador único do funcionário
    name: string;              // Nome do funcionário
    position: string;          // Cargo do funcionário
    department: string;        // Departamento do funcionário
    email: string;             // E-mail do funcionário
    sales?: Sale[];            // Vendas associadas ao funcionário (relacionamento um-para-muitos)
}
