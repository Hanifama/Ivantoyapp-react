import "./Index.css"
import { Navbar, Sidebar, Datatable } from "../../components/index";
import Product from "../../components/datatable/Datatableproduct";

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Product/>
      </div>
    </div>
  )
}

export default List
