import {Link} from "react-router-dom"

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
import { FaGooglePlusG } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
const Header = () => {
  return (
    <div className="sticky-top">
      <div className="header-contact p-2 bg-danger d-flex justify-content-between border-bottom-own align-items-center flex-wrap">
          <div className="left-side">
               <p className="text-white"><span><MdOutlineMail className="text-whiet" /></span><span> info@dindigulsaitourstravels.com</span></p>
          </div>
          <div className="right-site">
          <CiFacebook className="px-1 h4 bg-white  ms-1 rounded" /> 
          <CiTwitter className="px-1 h4 bg-white  ms-1 rounded" />
          <FaGooglePlusG className="px-1 h4 bg-white ms-1 rounded" />
          <FaPinterestP className="px-1 h4 bg-white ms-1 rounded" />
          <TfiYoutube className="px-1 h4 bg-white ms-1 rounded" />
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
    <Link to={"/vaigai"} className="text-danger" style={{ fontSize: "30px", fontWeight: "700" }}>
      VAIGAI
    </Link>
  </NavbarBrand>
  <NavbarContent>
    <NavItem>
      <Link to={"/vaigai"}>Home</Link>
    </NavItem>
    <NavItem>
      <Link to={"/about"}>About</Link>
    </NavItem>
    <DropDown style={{ width: "170px" }} label="Services">
      <NavItem>
        <Link to={"/one-day-package"}>One Day Package</Link>
      </NavItem>
      <NavItem>
        <Link to={"/tour-places"}>Tour Places</Link>
      </NavItem>
      {/* <NavItem>
        <a href="/">Service 3</a>
      </NavItem> */}
    </DropDown>
    <NavItem>
      <Link to={"/contact"}>Contact</Link>
    </NavItem>
    <NavItem>
      <Link to={"/payment"}>Payment</Link>
    </NavItem>
  </NavbarContent>
  <SideContent>
    <SideItems>Sign In</SideItems>
    <SideItems>Sign Up</SideItems>
  </SideContent>
</Navbar>
    </div>
  )
}

export default Header
