export interface Item {
    item_id: string,
    product_name: string,
    department_name: string,
    stock_quantity: number,
    description: string, 
    price: number
}

export interface Department {
    department_id: string,
    department_name: string
}