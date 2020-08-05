import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Container } from "react-bootstrap";
const Dashboard = () => {
  useEffect(() => {
    
    let socket = io("https://socketioserverv.herokuapp.com/");
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
export default Dashboard;
