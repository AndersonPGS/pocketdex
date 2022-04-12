import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import {
  Container,
  PageNavigation,
  Pokemon,
  Pokemons,
  Wrapper,
} from "./styles";

interface PokemonData {
  name?: string;
  url?: string;
}

interface APIPokemon {
  next?: string;
  previous?: string;
  results?: PokemonData[];
}

const Home: React.FC = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const [currentUrl, setCurrentUrl] = useState(1);

  const { data, isFetching } = useQuery<APIPokemon>(
    ["pokemon", url],
    async () => {
      const response = await axios.get(url);
      return response.data;
    }
  );

  const navigate = useNavigate();
  function handlePokemonPage(url: string) {
    let domain = new URL(url);
    const id = domain.pathname.split("/")[4];
    navigate("/" + id);
  }

  function handleNextPage(page: string) {
    setCurrentUrl(currentUrl + 1);
    setUrl(page);
  }

  function handlePreviousPage(page: string) {
    setCurrentUrl(currentUrl - 1);
    setUrl(page);
  }

  return (
    <Container>
      <div className="blob1" />
      <Wrapper>
        <h1>Pocketdex</h1>
        <Pokemons>
          {isFetching && <p>Carregando</p>}
          {data?.results?.map((pokemon) => (
            <Pokemon
              key={pokemon.name}
              onClick={() => {
                pokemon.url && handlePokemonPage(pokemon.url);
              }}
            >
              <a>{pokemon.name?.replace("-", " ")}</a>
            </Pokemon>
          ))}
        </Pokemons>
        <PageNavigation>
          {data?.previous ? (
            <a
              id="back"
              onClick={() => {
                if (data.previous) {
                  handlePreviousPage(data.previous);
                }
              }}
            >
              <img src={arrow} alt="previous page" />
            </a>
          ) : (
            <a id="back" className="disable">
              <img src={arrow} alt="previous page" />
            </a>
          )}

          <div className="current">{currentUrl}</div>

          {data?.next ? (
            <a
              id="next"
              onClick={() => {
                if (data.next) {
                  handleNextPage(data.next);
                }
              }}
            >
              <img src={arrow} alt="next page" />
            </a>
          ) : (
            <a id="next" className="disable">
              <img src={arrow} alt="next page" />
            </a>
          )}
        </PageNavigation>
      </Wrapper>
    </Container>
  );
};

export default Home;
