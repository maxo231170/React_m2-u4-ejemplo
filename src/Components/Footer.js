import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';


class Footer extends Component{
    
    render(){
        return (
            <div>
                <Nav defaultActiveKey="/home" as="ul">
               <Nav.Item as="li">
                  <Nav.Link href="/a_cerca_de">A cerca de nosotros...</Nav.Link>
               </Nav.Item>
               <Nav.Item as="li">
                  <Nav.Link eventKey="link-1">Contacto</Nav.Link>
               </Nav.Item>
               <Nav.Item as="li">
                  <Nav.Link eventKey="link-2">Consultas</Nav.Link>
               </Nav.Item>
               </Nav>
            </div>
        )
    }
}
export default Footer;