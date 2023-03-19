import "./Table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../firebase.config'

const List = () => {
  const [Items,setItems] = useState([])

  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Acer",
      date: "1 March",
      amount: 785,
      method: "Ketua RT",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Dana Subardjo",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Dana",
      date: "2 March",
      amount: 900,
      method: "Kepala desa",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon ",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Redra",
      date: "3 March",
      amount: 35,
      method: "Ketua RW",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Razer",
      date: "4 March",
      amount: 920,
      method: "Kepala desa",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Agas Subardi",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Agas",
      date: "5 March",
      amount: 2000,
      method: "Dirjen Polda",
      status: "Pending",
    },
  ];

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
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Nama Barang</TableCell>
            <TableCell className="tableCell">Category</TableCell>
            <TableCell className="tableCell">Stok</TableCell>
            <TableCell className="tableCell">Harga</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Items.map((items) => (
            <TableRow key={items.id}>
              <TableCell className="tableCell">{items.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={items.imageURL} alt="" className="image" />
                  {items.title}
                </div>
              </TableCell>
              <TableCell className="tableCell">{items.category}</TableCell>
              <TableCell className="tableCell">{items.calories}</TableCell>
              <TableCell className="tableCell">{items.price}</TableCell>                            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
