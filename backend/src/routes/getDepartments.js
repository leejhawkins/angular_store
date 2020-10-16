import { db } from '../database'

export const getDepartments = {
    method: 'GET',
    path: '/api/departments',
    handler: async (req,h) => {
        const { results } = await db.query(
            'SELECT * FROM departments'
        )
        return results;
    }
}