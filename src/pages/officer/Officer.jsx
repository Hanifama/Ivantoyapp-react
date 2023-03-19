import { Navbar, Sidebar, Officer } from "../../components/index";
import "./Officer.css"

const Aparat = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Officer/>
      </div>
    </div>
  )
}

export default Aparat