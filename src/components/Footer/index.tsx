import React from "react";
import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <a href="https://github.com/andersonpgs">Created by AndersonPGS</a>
      </div>
      <div className="right">
        <a href="https://pokeapi.co/docs/">API</a>
        <a href="mailto:andersonpgs.contato@hotmail.com">Contact</a>
        <a href="https://github.com/andersonpgs/pocketdex">Github</a>
      </div>
    </Container>
  );
};

export default Footer;
