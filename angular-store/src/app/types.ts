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

export interface Transaction {
    transaction_id: string,
    transaction_type: string,
    amount: number,
    item_id: string,
    items: string,
    account_balance: number,
    transaction_date: Date
}
export interface User {
    User_id: string,
    user_name: string,
    account_balance: number
}