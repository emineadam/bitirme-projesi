import React from "react";
import { Container } from "react-bootstrap";
import CardBootom from "./CardBottom";
import Cards from "./Cards";
import Cardss from "./Cardss";
import Featured from "./Featured";
import Header from "./Header";

function Content() {
  return (
    <Container className="mt-3">
        <Header />
        <Featured />
        <Cards />
        <Cardss/>
        <CardBootom />
    </Container>
  );
}

export default Content;