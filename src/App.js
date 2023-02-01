import "./index.css";
//components
import { Footer, Login, Register, Reset, Layanan, About, Contact, Admin, MainHeader, MainContainer, CreateContainer } from "./components/index";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/FirebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

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
            <MainHeader/>
            <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/reset" element={<Reset/>}/>


                    <Route path="/" element={<MainContainer/>}/>
                    <Route path="/layanan" element={<Layanan/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/createItem" element={<CreateContainer/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                </Routes>
            </main>
            {/* <Footer/> */}
        </div>
   </AnimatePresence>

  );
}

export default App;
