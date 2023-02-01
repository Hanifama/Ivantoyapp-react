import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../firebase.config'

const Admin = () => {

    const [Items,setItems] = useState([])
    
    const getData = async () => {
        const foodItemsRef = collection(firestore, 'foodItems')
        const foodItemsSnap = await getDocs(foodItemsRef)

        console.log(foodItemsSnap)
        const barangItems = []
        foodItemsSnap.forEach(doc=>{
            barangItems.push(doc.data())
            console.log(doc.data())
        })

        setItems(barangItems)
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div className="w-full">
            <h1>blalala</h1>
            {Items.map(items => (
                <table class="min-w-full" key={items.id}>
                <thead class="border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      {items.id}
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      {items.title}
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      {items.calories}
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      {items.price}
                    </th>
                  </tr>
                </thead>
              </table>
            ))}
        </div>
      )
}

  

export default Admin