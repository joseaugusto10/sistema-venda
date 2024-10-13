import { Sale } from "./Sale";

export interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    sales?: Sale[];
}
