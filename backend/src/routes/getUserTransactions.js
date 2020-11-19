import { Boom } from '@hapi/boom';
import * as admin from 'firebase-admin'
import { db } from '../database'

export const getUserTransactions = {
    method: 'GET',
    path: '/api/users/{userId}/transactions',
    handler: async(req,h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token)
        console.log(user)
        const userId = req.params.userId;
        if (user.uid != userId) throw Boom.unauthorized('User can only access own transactions ')
        const { results } = await db.query(
            'SELECT * FROM transactions WHERE user_id=? ', userId
        )
        console.log(results)
        if (!results) throw Boom.notFound(`Listing does not exist`)
        return results;
    }
}