import { setDoc, doc, getDocs, query, collection, orderBy } from "firebase/firestore"
import { firestore } from "../firebase.config"

// save item baru
export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`), data, { 
            merge : true
        })
}

// dapet semua item
export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore,"foodItems"),orderBy("id","desc"))
    )

    return items.docs.map((doc) => doc.data())
}

// save item order
export const saveOrder = async (data) => {
    await setDoc(
        doc(firestore, 'orderItems', `${Date.now()}`), data, { 
            merge : true
        })
}

export const getAllOrders = async () => {
    const orders = await getDocs(
        query(collection(firestore,"orderItems"),orderBy("id","name"))
    )

    return orders.docs.map((doc) => doc.data())
}