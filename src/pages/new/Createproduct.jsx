import "./New.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components/index";

import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { motion } from 'framer-motion';

import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md';
import { actionType } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';
import { storage } from '../../firebase.config';
import "../../utils/data"
import { categories } from '../../utils/data';
import { getAllFoodItems, saveItem } from '../../utils/FirebaseFunctions';
import Loader from '../../components/loader/Loader';

const Createproduct = () => {
    const [title,setTitle] = useState("");
    const [calories,setCalories] = useState("");
    const [price,setPrice] = useState("");
    const [fields,setFields] = useState(false);
    const [category,setCategory] = useState(null);
    const [alertStatus,setAlertStatus] = useState('danger');
    const [msg,setMsg] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [imageAsset,setImageAsset] = useState(null);

    const [{fooItems}, dispatch] = useStateValue()

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            console.log(error);
            setFields(true);
            setMsg('Gagal Unggah Gambar : Coba Lagi');
            setAlertStatus('danger')
            setTimeout(()=>{
                setFields(false)
                setIsLoading(false)
            },4000)
        },()=> {
            getDownloadURL(uploadTask.snapshot.ref).then(dowloadURL=>{
                setImageAsset(dowloadURL)
                setIsLoading(false)
                setFields(true)
                setMsg('Image Berhasil Diunggah');
                setAlertStatus('succes')
                setTimeout(()=>{
                    setFields(false)
                },4000)
            })
        })
    };

    const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(( ) => {
            setImageAsset(null)
            setIsLoading(false)
            setFields(true)
                setMsg('Image Berhasil Dihapus');
                setAlertStatus('succes')
                setTimeout(()=>{
                    setFields(false)
                },4000)
        })
    };

    const saveDetails = () => {
        setIsLoading(true)
        try{
            if(!title || !calories || !imageAsset || !price || !category){
                setFields(true);
                setMsg('request anda gagal coba lagi!!');
                setAlertStatus('danger')
                setTimeout(()=>{
                    setFields(false)
                    setIsLoading(false)
                },4000)
            }else{
                const data = {
                    id : `${Date.now()}`,
                    title : title,
                    imageURL : imageAsset,
                    category : category,
                    calories : calories,
                    qty : 1,
                    price : price
                }
                saveItem(data)
                setIsLoading(false)
                setFields(true)
                setMsg('Data Berhasil Disimpan');
                setAlertStatus('succes')
                clearData()
                setTimeout(()=>{
                    setFields(false)
                },4000)
            }

        }catch(error){
            console.log(error);
            setFields(true);
            setMsg('Error While uploading : try again');
            setAlertStatus('danger')
            setTimeout(()=>{
                setFields(false)
                setIsLoading(false)
            },4000)
        }

        fetchData()
    };

    const clearData = () => {
        setTitle("")
        setImageAsset(null)
        setCalories("")
        setPrice("")
        setCategory("Pilih Kategori")
    }

    const fetchData = async () => {
        await getAllFoodItems().then(data => {
         dispatch({
           type : actionType.SET_FOOD_ITEMS,
           foodItems : data,
         })
        })
      }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
          <div className="w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
            {/* Alert */}
            {
                fields &&(
                    <motion.p 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    className={`w-full p-2 rounded-lg text-center text-lg font-semibold
                    ${alertStatus==='danger'? 'bg-red-400 text-red-800': 'bg-emerald-400 text-emerald-800'}`}>
                     {msg}
                    </motion.p>
                 )
            }

            {/* Input Beri Nama */}
            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <MdFastfood className="text-xl text-gray-700"/>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder="Beri aku nama" 
                className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none 
                placeholer:text-gray-400 text-textColor"/>
            </div>

            {/* input kategori */}
            <div className="w-full">
                <select 
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
                >
                    <option value="other" className="bg-white">
                      Pilih Kategori
                    </option>
                    {categories && categories.map(item=>(
                        <option 
                        key={item.id}
                        value={item.urlParamName}
                        className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                        >
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Upload Gambar */}
            <div className="group flex justify-center items-center flex-col border-2 border-dotted
             border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">                
                {isLoading ? <Loader/> : <>
                        {!imageAsset ? <>
                            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700"/>
                                    <p className="text-gray-500 hover:text-gray-700">Klik Disini untuk Upload</p>
                                </div>
                                <input type="file" className="w-0 h-0" name="uploadingimage" accept="image/" onChange={uploadImage}/>
                             </label>
                        </> : <>
                            <div className="relative h-full">
                                <img src={imageAsset} alt="Upload Images" className="w-full h-full object-cover " />
                                <button type='button'
                                className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 
                                text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out '
                                onClick={deleteImage}
                                >
                                    <MdDelete className='text-white'/>
                                </button>
                            </div>
                        </>}
                </>}
            </div>

         {/* input Kalories */}
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdFoodBank className="text-gray-700 text-2xl"/>
                    <input type="text" 
                    required 
                    value={calories}
                    onChange={(e) => setCalories(e.target.value) } 
                    placeholder="Stok" 
                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
                </div>
                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdAttachMoney className="text-gray-700 text-2xl"/>
                    <input type="text" 
                    required 
                    value={price}
                    onChange={(e) => setPrice(e.target.value) }   
                    placeholder="Harga" 
                    className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"/>
                </div>
            </div>

            {/* button submit */}
             <div className="flex items-center w-full">
                <button type="button" 
                className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none
                 bg-emerald-500 px-2 py-2 rounded-lg text-lg text-white font-semibold"
                onClick={saveDetails}
                >
                    Save
                </button>
            </div>               




        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createproduct;
