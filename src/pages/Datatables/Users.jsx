import "./Index.css"
import { Navbar, Sidebar, Datatable } from "../../components/index";

import Users from "../../components/datatable/Datatableusers";

const Listusers = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Users/>
      </div>
    </div>
  )
}

export default Listusers
