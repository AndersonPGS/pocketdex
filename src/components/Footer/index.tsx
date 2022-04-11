import React from "react";
import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <a href="/">Created by AndersonPGS</a>
      </div>
      <div className="right">
        <a href="/">API</a>
        <a href="/">Contact</a>
        <a href="/">Github</a>
      </div>
    </Container>
  );
};

export default Footer;
