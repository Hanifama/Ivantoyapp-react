import { fetchCart, fetchData, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart()

// const foodInfo = fetchData()

export const initialState = {
    user:userInfo,
    foodItems : null,
    cartShow : false,
    cartItems : cartInfo,
    isLoggedIn: false,
    email:null,
    useName:null,
    userID:null,
}