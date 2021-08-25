import { React } from "react";
//Import MDBootstrap Components
import { MDBContainer } from "mdbreact";


function Footer() {
  return (
    <header>
        <div className="footer-copyright text-center py-3 elegant-color">
            <MDBContainer fluid>
            <p className="text-white">&copy; {new Date().getFullYear()} Copyright - RastaStatus | Website designed by <a className="light-blue-text" target="_blank" rel="noreferrer" href="https://legoray.com">Legoncio</a> - Backend designed by <a className="light-blue-text" target="_blank" rel="noreferrer" href="https://gamerexde.dev">Gamerexde</a></p>
            </MDBContainer>
        </div>
    </header>
      );
    }
  
export default Footer;