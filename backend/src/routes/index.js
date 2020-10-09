import { getAllListingsRoute} from './getAllListings'
import { getListingRoute} from './getListing'
import { buyProduct } from  './buyProduct'
import { getUserTransactions } from './getUserTransactions'
import { createNewUser } from './createNewUser'

export default [
    getAllListingsRoute,
    getListingRoute,
    buyProduct,
    getUserTransactions,
    createNewUser
]