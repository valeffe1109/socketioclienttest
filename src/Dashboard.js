import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Form, Button, Container } from "react-bootstrap";
const App = () => {
 let socket;
  useEffect(() => {
    socket = io("localhost:5000");
    socket.on("new-remote-operations", function (data) {
      setCoca(data.coca);
      setBirra(data.birra);
      setSprite(data.sprite);
      console.log(data);
    });
  }, []);
  const [coca, setCoca] = useState("");
  const [birra, setBirra] = useState("");
  const [sprite, setSprite] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("new-operations", {
      coca: coca,
      birra: birra,
      sprite: sprite,
    });
  };
  return (
    <div>
      <Container>
        <h1>Coca: {coca}</h1>
        <h1>Birra: {birra}</h1>
        <h1>Sprite: {sprite}</h1>
      </Container>
    </div>
  );
};
export default App;
