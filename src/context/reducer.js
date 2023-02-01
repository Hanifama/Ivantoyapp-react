import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initalState';


export const actionType = {
    SET_USER : 'SET_USER',
    SET_FOOD_ITEMS : 'SET_FOOD_ITEMS',
    SET_CART_SHOW : 'SET_CART_SHOW',
    SET_CART_ITEMS : 'SET_CART_ITEMS'
}

const reducer = (state, action)=>{
    // console.log(action);

    switch(action.type){
        case actionType.SET_USER:
            return{
                ...state,
                user:action.user,
            }

            case actionType.SET_FOOD_ITEMS:
            return{
                ...state,
                foodItems : action.foodItems,
            }

            case actionType.SET_CART_SHOW:
                return{
                    ...state,
                    cartShow : action.cartShow,
                }

                case actionType.SET_CART_ITEMS:
                    return{
                        ...state,
                        cartItems : action.cartItems,
                    }   

            default:
                return state;
    }
}

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//       SET_ACTIVE_USER: (state, action) => {
//           console.log(action.payload);
//           const {email, userName, userID} = action.payload
//           state.isLoggedIn = true;
//           state.email = email;
//           state.userName = userName;
//           state.userID = userID;
//       },
//       REMOVE_ACTIVE_USER(state, action) {
//           state.isLoggedIn = false;
//           state.email = null;
//           state.userName = null;
//           state.userID = null;
//       }
//     }
//   });
  
//   export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions
  
//   export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
//   export const selectEmail = (state) => state.auth.email;
//   export const selectUserName = (state) => state.auth.useName;
//   export const selectUserID = (state) => state.auth.userID;
  


export default reducer;