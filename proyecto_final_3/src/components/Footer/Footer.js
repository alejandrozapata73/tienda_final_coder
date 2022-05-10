import "./footer.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div>
      <MDBFooter color="blue" className="font-small pt-4 mt-4 abajo">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Tienda Geek 2.0</h5>
              <p>
                Gracias por visitar nuestra tienda de tazas!!!
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Recomendaciones</h5>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Derechos Reservados:{" "}
            <a href="http://tiendageek.com.ar/">
              {" "}
              http://tiendageek.com.ar/{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
