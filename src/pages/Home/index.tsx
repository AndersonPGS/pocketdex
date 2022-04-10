import React from "react";
import arrow from "../../images/arrow.svg";
import {
  Container,
  PageNavigation,
  Pokemon,
  Pokemons,
  Wrapper,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="blob1"></div>
      <Wrapper>
        <h1>Pocketdex</h1>
        <Pokemons>
          <Pokemon href="/">Charmander</Pokemon>
          <Pokemon href="/">Pikachu</Pokemon>
          <Pokemon href="/">Charizard</Pokemon>
          <Pokemon href="/">Bulbasaur</Pokemon>
          <Pokemon href="/">Charmander</Pokemon>
        </Pokemons>
        <PageNavigation>
          <a id="back" href="/">
            <img src={arrow} alt="previous page" />
          </a>
          <div className="current">1</div>
          <a id="next" href="/">
            <img src={arrow} alt="next page" />
          </a>
        </PageNavigation>
      </Wrapper>
    </Container>
  );
};

export default Home;
