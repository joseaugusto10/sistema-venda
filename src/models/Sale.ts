import { Client } from "./Client";
import { Product } from "./Product";

export interface Sale {
    id: number;                 // Identificador único da venda
    clientId: number;          // Identificador do cliente que realizou a venda (chave estrangeira)
    productId: number;         // Identificador do produto vendido (chave estrangeira)
    quantity: number;          // Quantidade do produto vendido
    date: Date;                // Data da venda
    client?: Client;           // Cliente que realizou a venda (opcional, para relacionamento)
    product?: Product;         // Produto vendido (opcional, para relacionamento)
}
