import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { useContext,useState} from "react";
import Button from 'react-bootstrap/Button';

function ProductCard({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Img src={product.img} />
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                En Carrito: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  className="mx-2"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  sm="6"
                  className="mx-2"
                  onClick={() => cart.removeOneFromCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="my-2"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Eliminar del carrito
            </Button>
          </>
        ) : (
            <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Agregar al carrito
          </Button>
        )
        }
      
      </Card.Body>
      <Button variant="light" onClick={() => {
        setExpanded(!expanded)}
        
      }>Ver Detalles</Button>
          {expanded && (
            <div>
              {product.data}
             
            </div>
          )}
    </Card>
  );
}

export default ProductCard;
