import { db } from '../database'

export const createNewUser = {
    method: 'POST',
    path: '/api/users',
    handler: async (req,h) => {
        const { userName = '', password = '', balance = 0  } = req.payload;
        await db.query(
            `INSERT INTO users (user_name, user_password, account_balance)
             VALUES (?,?,?)`,
            [userName,password,balance]
        )
        return { userName, password, balance}
    }
}