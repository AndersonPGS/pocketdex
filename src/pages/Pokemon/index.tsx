import React from "react";
import arrow from "../../images/arrow.svg";
import { Container, PokemonProfile, Title, Wrapper } from "./styles";

const Pokemon: React.FC = () => {
  return (
    <Container>
      <div className="blob1"></div>
      <Wrapper>
        <Title>
          <a href="/">
            <img src={arrow} alt="previous page" />
          </a>
          <h1>
            Pikachu
            <span>025</span>
          </h1>
        </Title>

        <PokemonProfile></PokemonProfile>
      </Wrapper>
    </Container>
  );
};

export default Pokemon;
