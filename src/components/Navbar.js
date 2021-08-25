import { React } from "react";
//Import MDBootstrap Components
import { MDBNavItem, MDBNav, MDBIcon } from "mdbreact";

//Import Images
import legoray_logo from '../img/logo.png';


function Navbar() {
  return (
    <header>
        <MDBNav color="black container-fluid">
                <MDBNavItem className="ml-4"></MDBNavItem>
                <MDBNavItem><img className="mt-2" src={legoray_logo} height="36" width="" alt="" /></MDBNavItem>
            <MDBNavItem right className="py-3 ml-auto"><a className="text-white" href="https://legoray.com"><MDBIcon className="text-white" icon="sign-out-alt" size="lg"/> Back to legoray.com</a></MDBNavItem>
        </MDBNav>
    </header>
      );
    }
  
  export default Navbar;