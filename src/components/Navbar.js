import React from "react";
import { useState, useContext } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">ECommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="info" onClick={handleShow}>
            Carrito ({productsCount} productos)
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? 
            <>
              <h2>Productos en el carrito:</h2>

              <hr></hr>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct key = {idx}                  id={currentProduct.id}
                  quantity={cart.getProductQuantity(currentProduct.id)}
                ></CartProduct>
              ))}

              <h2 className="pt-5">Total: ${cart.getTotalCost().toFixed(2)}</h2>

                           
            </>
           : (
            <h1>Tu carrito esta vacio!</h1>
            
          )
}</Modal.Body>   
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="success">Comprar productos!</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarComponent;
