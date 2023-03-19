import "./Datatable.css";
import { DataGrid } from "@mui/x-data-grid";

import { useState, useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../firebase.config'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";



const Product = () => {
    
    const [Items,setItems] = useState([])
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const Navigate = useNavigate()
  
    useEffect(() => {
      
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
    getData()
    }, []);
  
    const columns = [
      { field: 'id', headerName: 'ID Barang', width: 200 },
      { field: 'title', headerName: 'Nama Barang', width: 200 },
      { field: 'category', headerName: 'Kategori', width: 200 },
      { field: 'calories', headerName: 'Stok', width: 100 },
      { field: 'price', headerName: 'Harga(Rupiah)' , width: 150 },
      
    ];

    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link  style={{ textDecoration: "none" }}>
                  <div className="viewButton"
                  onClick={() => handleClick(params.row.id)}
                  >View</div>
                </Link>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
      
      const handleClick = (id) => {
        const product = products.find((p) => p.id === id);
        setSelectedProduct(product);
        Navigate("new")
      };

      const handleDelete = (id) => {
        setItems(Items.filter((item) => item.id !== id));
      };
  
    return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Barang
        <Link to="/product/new-product" className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        className="datagrid"
        rows={Items}
        columns={columns.concat(actionColumn)}        
        pageSize={5} 
        checkboxSelection
        />
    </div>
     
    );
  };
  
  export default Product;
  