import { fetchCart, fetchData, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartInfo = fetchCart()

// const foodInfo = fetchData()

export const initialState = {
    user:userInfo,
    isLoggedIn: false,
    email:null,
    useName:null,
    userID:null,
    foodItems : null,
    cartShow : false,
    cartItems : cartInfo,
}