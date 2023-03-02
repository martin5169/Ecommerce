import React from "react";
import { Row, Colum, Col } from "react-bootstrap";
import { array } from "../productStore";
import ProductCard from "../components/ProductCard"

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">Bienvenido a la tienda</h1>
      <Row xs={1} md={3} className="g-4">
        {array.map((p,idx) => (
           
          <Col align="center" key={idx}>
            <ProductCard product={p}></ProductCard>
            </Col>
          
        ))
        }
        
      </Row>
    </>
  );
}

export default Store;
