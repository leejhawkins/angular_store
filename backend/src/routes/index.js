import { getAllListingsRoute} from './getAllListings'
import { getListingRoute} from './getListing'
import { buyProduct } from  './buyProduct'
import { getUserTransactions } from './getUserTransactions'
import { createNewUser } from './createNewUser'
import { getDepartments } from './getDepartments'

export default [
    getAllListingsRoute,
    getDepartments,
    getListingRoute,
    buyProduct,
    getUserTransactions,
    createNewUser
]