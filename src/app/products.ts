export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
}
export class Cart {
    constructor (
        public item: Product,
        public quantity: number,
        public total: number
    ) {}

}
export const products = [
    {
        id: 1,
        name: 'iPhone 13 mini',
        price: 25000,
        quantity: 1,
        description: ''
    },
    {
        id: 2,
        name: 'iPhone 13',
        price: 35000,
        quantity: 1,
        description: ''
    },
    {
        id: 3,
        name: 'iPhone 13 pro',
        price: 45000,
        quantity: 1,
        description: ''
    },
    {
        id: 4,
        name: 'iPhone 13 pro max',
        price: 55000,
        quantity: 1,
        description: ''
    },
]