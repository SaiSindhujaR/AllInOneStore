export interface Product
{
    id: number;
    name: string;
    description?: string;
    price: number;
    category?: string;
    brand?: string;
    pictureUrl?: string;
    quantityInStock?: number;
}