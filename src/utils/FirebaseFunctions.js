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