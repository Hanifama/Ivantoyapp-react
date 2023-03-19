import "./index.css";
//components
import { 
  Footer,
   Login, 
   Register, 
   Reset, 
   Layanan, 
   About, 
   Contact, 
   Orders, 
   MainHeader, 
   MainContainer, 
   CreateContainer } from 
   "./components/index";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/FirebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

// import Home from "./pages/home/Index";
import List from "./pages/Datatables/Products";
import Single from "./pages/single/Single";
import New from "./pages/new/New";


import { productInputs, userInputs } from "./formSource";
import Admin from "./pages/admin/Index";
import Createproduct from "./pages/new/Createproduct";
import Listusers from "./pages/Datatables/Users";

//pages
// import { Home, Contact, Login, Register, Reset } from "./pages";

const App = () =>{

   const [{},dispatch] = useStateValue()

   const fetchData = async () => {
     await getAllFoodItems().then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      })
     })
   }

   useEffect(() =>{
    fetchData()
   },[])
  
  return (
    <AnimatePresence exitBeforeEnter>   
         <div className="w-screen h-auto flex flex-col bg-primary">            
                <Routes>
                  <Route path="/">
                  <Route index element={<Login/>}/>

                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/reset" element={<Reset/>}/>
                  </Route>
                    


                    <Route path="/home" element={<MainContainer/>}/>
                    <Route path="/layanan" element={<Layanan/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/createItem" element={<CreateContainer/>}/>
                    {/* <Route path="/admin" element={<Admin/>}/> */}
                    <Route path="/orders" element={<Orders/>}/>

                    <Route path="admin-master">

                      <Route index element={<Admin />} />

                      <Route path="login-master" element={<Login />} />

                      <Route path="users">
                        <Route index element={<Listusers />} />
                        <Route path=":userId" element={<Single />} />
                        <Route
                          path="new"
                          element={<New inputs={userInputs} title="Add New User" />}
                        />
                      </Route>

                      <Route path="products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single/>} />
                        <Route
                          path="new-product"
                          element={<Createproduct />}
                        />
                      </Route>
                    </Route>
                </Routes>
            
            {/* <Footer/> */}
        </div>
   </AnimatePresence>

  );
}

export default App;