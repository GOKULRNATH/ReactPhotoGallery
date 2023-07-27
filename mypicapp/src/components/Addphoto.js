import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./BaseUrl";
import { AiOutlineUpload } from 'react-icons/ai';


function Addphoto() {
  const [Album, setAlbum] = useState({
    image: null
  });
  const changehandleSubmit = (a) => {
    if (a.target.name == "image") {
      setAlbum({ ...Album, image: a.target.files[0] });
    } else {
      setAlbum({ ...Album, [a.target.name]: a.target.value });
    }
  };
  useEffect(() => {
    console.log(Album);
  });
  const navigate = useNavigate();
  const submitt = (b) => {
    console.log("submitted",Album);

    b.preventDefault();
    axiosInstance.post("/addphoto",Album,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },})
      .then((result) => {
        console.log("data entered", result);
        if (result.status === 200) {
          alert("Add Photo successfully");
          window.location.reload(false)
          navigate("/");
        } else{
          alert("Failed to Add");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className='main_add_photo'>
        <form onSubmit={submitt}>
            <div>
            <label className='upload_iconlabel shadow' htmlFor="connectionname" style={{ cursor: 'pointer',color:"white"}}>
              <AiOutlineUpload style={{ fontSize: '24px', marginRight: '8px',color:"white"}} />
              Select Image
            </label>
            </div>
          <div className='upload_button_div'>
          <input
            id="connectionname"
            type="file"
            name="image"
            onChange={changehandleSubmit}
            style={{ display: 'none' }}/>
            <input type='submit'value="Upload" className='upload_button_submit shadow'/>
          </div>

        </form>
    </div>
  )
}

export default Addphoto
