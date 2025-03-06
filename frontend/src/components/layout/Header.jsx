import {Link} from "react-router-dom"
import { FaPhone } from "react-icons/fa6";
import brandLogo from "../../assets/logo-vaigai.jpg";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavItem
  } from "responsive-navigation";
// icons
import { MdOutlineMail } from "react-icons/md"; 
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
   const [active,setActive] = useState("vaigai");
   window.onpopstate  = function(){
    let urlSplit = window.location.href.split("/")
     setActive(urlSplit[3] || "vaigai")
   return false;
}
  return (
    <div className="sticky-top">
      <div className="header-contact p-2 bg-danger d-flex justify-content-between border-bottom-own align-items-center flex-wrap">
          <div className="left-side">
               <p className="text-white"><span><MdOutlineMail className="text-whiet" /></span><span><a className="text-white" href="mailto:sathamtaj1111@gmail.com"> sathamtaj1111@gmail.com</a></span><br /> <span><FaPhone /> +91 8489946488</span></p>
          </div>
          <div className="right-site"> 
           <a href="https://www.instagram.com/tn57_vaigai_travels_official/"><FaInstagram className="px-1 h4 bg-white  ms-1 rounded text-dark" /></a>
           <a href="https://www.instagram.com/tn57_vaigai_travels_official/"><CiFacebook className="px-1 h4 bg-white  ms-1 rounded" /></a>
          </div>
      </div>
   <Navbar
  style={{
    backgroundColor: "white",
    borderBottom: "1px solid #dee2e6",
    padding: "20px 0",
  }}
>
  <NavbarBrand> 
    <Link to={"/"} className="text-danger" onClick={()=>setActive("vaigai")} style={{ fontSize: "30px", fontWeight: "700", color:(active == "vaigai"?"red":"black")}}>
      <img src={brandLogo} height={65} alt="" />
    </Link>
  </NavbarBrand>
  <NavbarContent>
    <NavItem>
      <Link to={"/"} onClick={()=>setActive("vaigai")} className="no-underline" style={{color:(active == "vaigai"?"red":"black")}} >Home</Link>
    </NavItem>
    <NavItem>
      <Link to={"/about"} onClick={()=>setActive("about")} style={{color:(active == "about"?"red":"black")}}>About</Link>
    </NavItem>
    <NavItem>
        <Link to={"/one-day-package"} onClick={()=>setActive("One Day Package")} style={{color:(active == "One Day Package"?"red":"black")}}>Package</Link>
      </NavItem>
    <NavItem>
      <Link to={"/book-you-cab"} onClick={()=>setActive("book-you-cab")} style={{color:(active == "book-you-cab"?"red":"black")}}>Book Your Cab</Link>
    </NavItem>
    <NavItem>
      <Link to={"/contact"} onClick={()=>setActive("contact")} style={{color:(active == "contact"?"red":"black")}}>Contact</Link>
    </NavItem>
  </NavbarContent>

</Navbar>
    </div>
  )
}

export default Header
