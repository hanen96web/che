import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { useNavigate } from 'react-router';

const Navi = () => {
  const navigate =useNavigate();
    return (
        <div>
           <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home" style={{display:"flex"}}>
      <img
        src="https://play-lh.googleusercontent.com/PH-2iORSfQs-iizoHzePXBaJCXml443pgoC14-lZESLFIp78A4SvxLKUVv1FyIQFtC8"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <p style={{color:"white"}}>TODOAPP</p>
    </Navbar.Brand> 
    <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
      <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
   </Container>
   </Navbar>
        </div>
    )
}

export default Navi;
