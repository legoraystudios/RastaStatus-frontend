//Import Components
import Navbar from "../components/Navbar";
import { MDBJumbotron, MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";


//Import CSS Stylesheets
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import '../includes/app.css';

function App() {

    //Website Title
        document.title = 'Service Status | LEGORAY';
    
      return (  
  <html>     
    <header>
        <Navbar></Navbar>

        <MDBJumbotron className="bg pb-5" style={{height: 600 }}>
            <h2 className="h1 display-3 text-center white-text title-spacing">Service Status</h2>
        </MDBJumbotron>
    </header>

    <body>
      <MDBContainer className="px-1 pt-5 pb-5">
        <MDBTable borderless>
          <MDBTableHead>
            <tr>
              <th>Monitor Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Uptime</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>Website - legoray.com</td>
              <td><span className="green-circle" /></td>
              <td>HTTPS</td>
              <td>99.99%</td>
            </tr>
            <tr>
              <td>Minecraft Vanilla Server</td>
              <td><span className="red-circle" /></td>
              <td>Port, minecraft</td>
              <td>35.99%</td>
            </tr>
            <tr>
              <td>Outgoing Emails</td>
              <td><span className="red-circle" /></td>
              <td>Mail Server</td>
              <td>45.59%</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </body>
  <footer>
  <div className="footer-copyright text-center py-3 elegant-color">
    <MDBContainer fluid>
          <p className="text-white">&copy; {new Date().getFullYear()} Copyright - RastaStatus | Website designed by <a className="light-blue-text" target="_blank" rel="noreferrer" href="https://legoray.com">Legoncio</a> - Backend designed by <a className="light-blue-text" target="_blank" rel="noreferrer" href="https://gamerexde.dev">Gamerexde</a></p>
    </MDBContainer>
    </div>
  </footer>
  </html>  
      );
    }
    
    export default App;