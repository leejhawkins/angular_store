import Boom from '@hapi/boom'
import { db } from '../database'

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req,h) => {
        const id = req.params.id;
        const { results}= await db.query(
            'SELECT * FROM products WHERE item_id=? ', id
        )
        if (!results) throw Boom.notFound(`Listing does not exist`)
        return results;
    }
}