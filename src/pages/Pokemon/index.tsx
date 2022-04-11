import React from "react";
import arrow from "../../images/arrow.svg";
import {
  Container,
  PokemonImage,
  PokemonProfile,
  Title,
  Wrapper,
} from "./styles";

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

        <PokemonProfile>
          <PokemonImage>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
              alt="Pikachu"
            />
            <div className="data">
              <div className="data-fragment">
                <h1>Height</h1>
                <p>0.4 m</p>
              </div>
              <div className="data-fragment">
                <h1>Weight</h1>
                <p>6.0 kg</p>
              </div>
            </div>
          </PokemonImage>
        </PokemonProfile>
      </Wrapper>
    </Container>
  );
};

export default Pokemon;
