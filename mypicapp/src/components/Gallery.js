import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import axiosInstance from "./BaseUrl";
import { BsEyeFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFilterLeft,BsFilterRight } from "react-icons/bs";
import Addphoto from './Addphoto';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

function Gallery() {
  const Photo_URL="http://localhost:4000/"
  const [viewwphoto, setviewwphoto] = useState([]);
  useEffect(() => {
    axiosInstance
      .post("/viewphotos")
      .then((res) => {
        console.log(res);
        setviewwphoto(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);




  const handleDelete = (id) => {
    console.log(id);
    axiosInstance
      .post(`/deletephoto/${id}`)
      .then((res) => {
        console.log(res, "photo delete");
        if (res.data.status === 200) {
          alert("Deleted photo Sucessfully");
          window.location.reload(false)
        } else {
          alert("Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  

const downloadimg=(photo)=>{
  const imageUrl = `${Photo_URL}${photo.image.filename}`;
  const filename = photo.image.filename; 
  saveAs(imageUrl,filename)
}

// const handleDownload = async (link) => { 
//   console.log(link)
//   const imageUrl = `${Photo_URL}${link}`; 
//   // const imageUrl = `https://grnmypics.onrender.com/${link}`; 
//   try { 
//     const response = await fetch(imageUrl); 
//     const blob = await response.blob(); 

//     const url = URL.createObjectURL(blob); 
//     const anchor = document.createElement('a'); 
//     anchor.href = url; 
//     anchor.download = 'image.jpg'; 
//     anchor.style.display = 'none'; 
//     document.body.appendChild(anchor); 
//     anchor.click(); 
//     document.body.removeChild(anchor); 
//     URL.revokeObjectURL(url); 
//   } catch (error) { 
//     console.error('Error downloading image:', error); 
//   } 
// };


  return (
    <div>
      <div className='album_main_div d-flex justify-content-center align-items-center'>
        <div className="sub_main_div_album">
            <div className="album_head_main">
                <span className='head_album'><BsFilterRight/>My Collections<BsFilterLeft/></span>
                {/* <span className='sub_head_album'>Every moments are valuable</span> */}
            </div>
        </div>
    </div>
      <div className='d-flex justify-content-center align-items-center'>
      <div style={{width: "90%"}}>
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                {viewwphoto.map((photo) => (
                        <div className='shadow p-2 each_image_div'>
                          <img
                            src={`${Photo_URL}${photo.image.filename}`} 
                            style={{width: "100%", display: "block"}}
                            alt="No image"/>
                            <div className='div_photo_details text-white'>

                              {/* VIEW IMAGE */}
                            <div><Link to={`${Photo_URL}${photo.image.filename}`}><label id='view' className='icons_main' style={{textDecoration: 'none',color:'white'}}><BsEyeFill className='eachicon'/>View</label></Link></div>
                            
                            {/* DELETE */}
                            <div onClick={() => handleDelete(photo._id)} className='icons_main'><MdDelete className='eachicon'/>Delete</div>

                            {/* <div  className='icons_main' onClick={()=>{handleDownload(photo.image.filename);console.log(photo.image.filename)}}>
                              <AiOutlineDownload className='eachicon'/>Download
                            </div> */}

                            {/* DOWNLOAD IMAGE */}
                            <div className='icons_main' onClick={() => { downloadimg(photo); console.log(photo.image.filename); }}>
                              <AiOutlineDownload className='eachicon' />Download
                            </div>

                            <div className='icons_main'>
                              {new Date(photo.date).getDate()}/{new Date(photo.date).getMonth() + 1}/{new Date(photo.date).getFullYear()  } 
                            </div>
                            <div className='icons_main'>
                              {new Date(photo.date).toLocaleString('en-US', {hour: 'numeric',minute: 'numeric',hour12: true,})}
                            </div>
                          </div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      </div>
      </div>
            <Addphoto/>
    </div>
  )
}

export default Gallery
