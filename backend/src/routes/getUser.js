import Boom from '@hapi/boom'
import { db } from '../database'
import * as admin from 'firebase-admin'

export const getUser = {
    method: 'GET',
    path: '/api/users/{userId}',
    handler: async (req, h) => {
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token)
        const userId = req.params.userId;
        const { results } = await db.query(
            'SELECT * FROM users WHERE User_id=? ', userId
        )
        if (!results) throw Boom.notFound(`Listing does not exist`)
        return results[0];
    }
}