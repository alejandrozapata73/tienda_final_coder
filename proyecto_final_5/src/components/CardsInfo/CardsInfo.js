import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="container">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPlgxBjaAofBMGKRkj8hVnroLkvLZUKvW6Q&usqp=CAU"
              alt="tazas personalizadas"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Tazas Geek</MDBCardTitle>
              <MDBCardText>
               tienda
                <br />
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  
                </a>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Actualizado</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://image.shutterstock.com/image-vector/super-oferta-spanish-translation-great-260nw-1815003008.jpg"
              alt="ofertas"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>ofertas</MDBCardTitle>
              <MDBCardText>
             Las mejores ofertas <br />
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  
                </a>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Actualizado</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://http2.mlstatic.com/D_NQ_NP_673780-MLA48485019598_122021-O.webp"
              alt="spiderman"
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Remeras</MDBCardTitle>
              <MDBCardText>
                Tienda de remeras
                <br />
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  
                </a>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Actualizado</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
