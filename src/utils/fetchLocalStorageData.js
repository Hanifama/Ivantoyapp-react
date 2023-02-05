import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { getAllFoodItems } from "./FirebaseFunctions";

export const fetchUser = () =>{
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

    return userInfo;
}

export const fetchCart = () =>{
    const cartInfo = localStorage.getItem('cartItems') !== 'undefined' ? JSON.parse(localStorage.getItem("cartItems"))
    : localStorage.clear();

    return cartInfo ? cartInfo : [];
}


// export const fetchData = async () => {
    
//   const [{}, dispatch] = useStateValue
//     await getAllFoodItems().then(data => {
//       dispatch({
//         type : actionType.SET_FOOD_ITEMS,
//         foodItems : data,
//       });
//     });
//   };
