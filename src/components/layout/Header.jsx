import {Link} from "react-router-dom"
import { FaPhone } from "react-icons/fa6";
import brandLogo from "../../assets/logo-vaigai.jpg";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavItem,
    SideContent,
    SideItems,
    DropDown,
  } from "responsive-navigation";
// icons
import { MdOutlineMail } from "react-icons/md"; 
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
const Header = () => {

   const [active,setActive] = useState("vaigai");

  return (
    <div className="sticky-top">
      <div className="header-contact p-2 bg-danger d-flex justify-content-between border-bottom-own align-items-center flex-wrap">
          <div className="left-side">
               <p className="text-white"><span><MdOutlineMail className="text-whiet" /></span><span><a className="text-white" href="mailto:sathamtaj1111@gmail.com"> sathamtaj1111@gmail.com</a></span><br /> <span><FaPhone /> +91 8489946488</span></p>
    
          </div>
          <div className="right-site">
          <CiFacebook className="px-1 h4 bg-white  ms-1 rounded" /> 
          <CiTwitter className="px-1 h4 bg-white  ms-1 rounded" />
          <FaInstagram className="px-1 h4 bg-white  ms-1 rounded" />
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
    <Link to={"/vaigai"} className="text-danger" onClick={()=>setActive("vaigai")} style={{ fontSize: "30px", fontWeight: "700", color:(active == "vaigai"?"red":"black")}}>
      <img src={brandLogo} height={65} alt="" />
    </Link>
  </NavbarBrand>
  <NavbarContent>
    <NavItem>
      <Link to={"/vaigai"} onClick={()=>setActive("vaigai")} style={{color:(active == "vaigai"?"red":"black")}} >Home</Link>
    </NavItem>
    <NavItem>
      <Link to={"/about"} onClick={()=>setActive("about")} style={{color:(active == "about"?"red":"black")}}>About</Link>
    </NavItem>
    <DropDown style={{ width: "170px" }} label="Services">
      <NavItem>
        <Link to={"/one-day-package"} onClick={()=>setActive("One Day Package")} style={{color:(active == "One Day Package"?"red":"black")}}>One Day Package</Link>
      </NavItem>
      <NavItem>
        {/* <Link to={"/tour-places"} onClick={()=>setActive("Tour Places")} style={{color:(active == "Tour Places"?"red":"black")}}>Tour Places</Link> */}
      </NavItem>
      <NavItem>
      {/* <Link to={"/releax"} onClick={()=>setActive("releax")} style={{color:(active == "Tour Places"?"red":"black")}}>Releax</Link> */}
      </NavItem>
    </DropDown>
    <NavItem>
      <Link to={"/contact"} onClick={()=>setActive("contact")} style={{color:(active == "contact"?"red":"black")}}>Contact</Link>
    </NavItem>
    <NavItem>
      <Link to={"/payment"} onClick={()=>setActive("Payment")} style={{color:(active == "Payment"?"red":"black")}}>Payment</Link>
    </NavItem>
    <NavItem>
      <Link to={"/book-you-cab"} onClick={()=>setActive("book-you-cab")} style={{color:(active == "book-you-cab"?"red":"black")}}>Book Your Cab</Link>
    </NavItem>
  </NavbarContent>
  <SideContent>
    <SideItems><Link to={"/register"}>Sign In</Link></SideItems>
    <SideItems><Link to={"/package-table"}>Sign Up</Link></SideItems>
  </SideContent>
</Navbar>
    </div>
  )
}

export default Header
