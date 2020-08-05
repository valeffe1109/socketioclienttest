import React, { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
let socket;
const User = () => {
  useEffect(() => {
    socket = io("https://socketioserverv.herokuapp.com/");
    socket.on('new-remote-operations', function (data) {
      setData(data.coca)
      console.log(data)
    });
  },[]);
  const [coca, setCocaCola] = useState("");
  const [birra, setBirra] = useState("");
  const [sprite, setSprite] = useState("");
  const [data,setData]= useState('')
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('new-operations',{
      coca:coca,
      birra:birra,
      sprite:sprite
    })
  };
  return (
    <div>
    <Container className="mt-5">
      <Form onSubmit={sendMessage}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Coca Cola</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter newMessage"
            onChange={(e) => setCocaCola(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Birra</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter newMessage"
            onChange={(e) => setBirra(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Sprite</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter newMessage"
            onChange={(e) => setSprite(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    <Container>
      {data}
    </Container>
    </div>
  );
};
export default User;
