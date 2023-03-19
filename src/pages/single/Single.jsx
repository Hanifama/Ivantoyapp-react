import "./Single.css";
import { Navbar, Sidebar } from "../../components/index";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ivantoryapp.appspot.com/o/Images%2F1674791852720-tekido.png?alt=media&token=fbea9ebb-9ee0-4182-af63-27f3b1e55ee8"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Smart System KIT</h1>

                <div className="detailItem">
                  <span className="itemKey">ID Barang:</span>
                  <span className="itemValue">109823456798</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Kategori:</span>
                  <span className="itemValue">Smart System School</span>
                </div>

                
                <div className="detailItem">
                  <span className="itemKey">Stok:</span>
                  <span className="itemValue">22</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Harga:</span>
                  <span className="itemValue">Rp. 35000000</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Single;
