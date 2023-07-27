import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "./image/mypiclogo.png"
import "./Navpic.css"

function Navpic() {
  return (
    <div className='main_nav'>
      <Navbar collapseOnSelect expand="lg" className='shadow' >
      <Container className='main_nav_div'>
        <div>
        
          <div className='d-flex justify-content-center align-items-center'>
            <img src={logo} className='logo_nav'/>
            <label style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>MyPic's</label>
          </div>
          
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav_toggle_button'/>
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <div className='main_link_div'>
                <div><Link to="/" className='sub_sub_link_'>Home</Link></div>
                <div><Link to="/Login" className='sub_sub_link_'>Login</Link></div>
                <div><Link to="/profile" className='sub_sub_link_'>Profile</Link></div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>
  );
}
    // <div className='d-flex justify-content-center shadow p-2 main_nav'>
    //   <div className="main_nav_div">
    //     <div className='d-flex'>
    //       <img src={logo} className='logo_nav'/>
    //       <label style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>MyPic's</label>
    //     </div>
    //     <div className="sub_nav_links_div ">
    //       <div className='Collapse'>
    //         <Nav className="link_items_main">
    //           <div><Link to="/" className='sub_sub_link_'>Home</Link></div>
    //           <div><Link to="/Addphoto" className='sub_sub_link_'>Add Photo</Link></div>
    //           <div><Link to="/Addphoto" className='sub_sub_link_'>Login</Link></div>
    //           <div><Link to="/chumma" className='sub_sub_link_'>Profile</Link></div>
    //         </Nav>
    //       </div> 
    //     </div>
    //   </div>
    // </div>

export default Navpic


