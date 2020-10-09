import { db } from '../database'

export const buyProduct = {
    method: 'POST',
    path: '/api/listings/{id}/buy-product',
    handler: async (req,h) => {
        const id = req.params.id;
        await db.query(
            'UPDATE PRODUCTS SET stock_quantity=stock_quantity-1 WHERE item_id=? ', 
            [id]
        )
        const { results } = await db.query(
            'SELECT * FROM products WHERE item_id=? ', id
        )
        if (!results) throw Boom.notFound(`Listing does not exist`)
        return results;
    }
}  