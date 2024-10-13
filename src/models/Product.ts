import { Sale } from "./Sale";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    sales?: Sale[];
}
