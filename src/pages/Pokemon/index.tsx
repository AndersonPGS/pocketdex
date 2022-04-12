import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import {
  Container,
  PokemonData,
  PokemonImage,
  PokemonProfile,
  Title,
  Wrapper,
} from "./styles";

interface PokemonData {
  name?: string;
  url?: string;
}

interface APIPokemon {
  next?: string;
  previous?: string;
  error?: string;
  pokemons?: {
    results?: PokemonData[];
  };
}

const Pokemon: React.FC = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery("user", async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  });
  return (
    <Container>
      {isFetching && <p>Carregando</p>}
      {console.log(data)}
      <div className="blob1" />
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
          <PokemonData>
            <div className="infos">
              <div className="info">
                <h1>Name</h1>
                <p>Pikachu</p>
              </div>
              <div className="info">
                <h1>Type</h1>
                <p>Eletric</p>
              </div>
              <div className="info">
                <h1>Abilities</h1>
                <p>Static</p>
                <p>Lightning Rod</p>
              </div>
            </div>
            <div className="stats">
              <h1>Stats</h1>
              <div className="stat">
                <p>HP</p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </div>
              <div className="stat">
                <p>Attack</p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </div>
              <div className="stat">
                <p>Defense</p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </div>
              <div className="stat">
                <p>Sp. Atk</p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </div>
              <div className="stat">
                <p>Sp. Def</p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </div>
              <div className="stat">
                <p>Speed</p>
                <div className="progress">
                  <div className="bar" />
                </div>
              </div>
            </div>
          </PokemonData>
        </PokemonProfile>
      </Wrapper>
    </Container>
  );
};

export default Pokemon;
