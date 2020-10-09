import { db } from '../database'

export const getUserTransactions = {
    method: 'GET',
    path: '/api/users/{id}',
    handler: async(req,h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM transactions WHERE user_id=? ', id
        )
        if (!results) throw Boom.notFound(`Listing does not exist`)
        return results;
    }
}