import { db } from '../database'

export const buyProduct = {
    method: 'POST',
    path: '/api/listings/{id}/buy-product',
    handler: async (req,h) => {
        const id = req.params.id;
        const transaction = req.payload
        console.log(transaction)
        await db.query(
            'UPDATE products SET stock_quantity=stock_quantity-1 WHERE item_id=? ', 
            [id]
        )
        await db.query(
            `INSERT INTO transactions (user_id,transaction_type,amount,item_id,items,account_balance)
            VALUES (?,?,?,?,?,?)`,
            [transaction.currentUser.User_id,"purchase",transaction.price,id,transaction.name,transaction.currentUser.account_balance-transaction.price]
        )
        await db.query(
            `UPDATE users SET account_balance=account_balance-? WHERE User_id=? `,
            [transaction.price, transaction.currentUser.User_id ]
        )
        const { results } = await db.query(
            'SELECT * FROM products WHERE item_id=? ', id
        )
        const item = results[0]
        if (!results) throw Boom.notFound(`Listing does not exist`)
        return item;
    }
}  