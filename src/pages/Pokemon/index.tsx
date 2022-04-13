import axios from "axios";
import React from "react";
import Palette from "react-palette";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import arrow from "../../images/arrow.svg";
import {
  Container,
  PokemonData,
  PokemonImage,
  PokemonProfile,
  Stat,
  Title,
  Wrapper,
} from "./styles";

interface PokemonTypes {
  type: {
    name: string;
  };
}

interface PokemonSprite {
  other: {
    home: {
      front_default?: string;
    };
  };
}

interface PokemonAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
}

interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonData {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: PokemonTypes[];
  abilities: PokemonAbilities[];
  sprites: PokemonSprite;
  stats: PokemonStats[];
}

const Pokemon: React.FC = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery<PokemonData>("user", async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  });
  return (
    <Container>
      <div className="blob1" />
      <Wrapper>
        {isFetching && <p className="load">Carregando...</p>}
        <Title>
          <a href="/">
            <img src={arrow} alt="previous page" />
          </a>
          <h1>
            {data?.name.replace("-", " ")}
            <span title="ID">{data?.id}</span>
          </h1>
        </Title>
        <PokemonProfile>
          {data?.sprites.other.home.front_default && (
            <Palette src={data?.sprites.other.home.front_default}>
              {(palette) =>
                !palette.loading && (
                  <PokemonImage
                    color1={palette.data.vibrant}
                    color2={palette.data.lightVibrant}
                    color3={palette.data.muted}
                  >
                    <img
                      src={data?.sprites.other.home.front_default}
                      alt={data?.name}
                    />
                    <div className="data">
                      <div className="data-fragment">
                        <h1>Height</h1>
                        <p>{data && data.height / 10} m</p>
                      </div>
                      <div className="data-fragment">
                        <h1>Weight</h1>
                        <p>{data && data.weight / 10} kg</p>
                      </div>
                    </div>
                  </PokemonImage>
                )
              }
            </Palette>
          )}
          <PokemonData>
            <div className="infos">
              <div className="info">
                <h1>Name</h1>
                <p>{data?.name.replace("-", " ")}</p>
              </div>
              <div className="info">
                <h1>Type</h1>
                {data?.types.map((type) => (
                  <p key={type.type.name}>{type.type.name}</p>
                ))}
              </div>
              <div className="info">
                <h1>Abilities</h1>

                {data?.abilities.map((abilitie) =>
                  abilitie.is_hidden ? (
                    <p
                      key={abilitie.ability.name}
                      title="Hidden Abilitie"
                      className="hidden"
                    >
                      {abilitie.ability.name.replace("-", " ")}
                    </p>
                  ) : (
                    <p key={abilitie.ability.name}>
                      {abilitie.ability.name.replace("-", " ")}
                    </p>
                  )
                )}
              </div>
            </div>
            <div className="stats">
              <h1>Stats</h1>
              {data?.stats.map((stat) => (
                <Stat percentage={stat.base_stat ?? 0} key={stat.stat.name}>
                  {stat.stat.name === "special-attack" && <p>Sp.Atk</p>}
                  {stat.stat.name === "special-defense" && <p>Sp.Def</p>}
                  {stat.stat.name != "special-attack" &&
                    stat.stat.name != "special-defense" && (
                      <p>{stat.stat.name}</p>
                    )}
                  <div className="progress">
                    <div className="bar" />
                  </div>
                </Stat>
              ))}
            </div>
          </PokemonData>
        </PokemonProfile>
      </Wrapper>
    </Container>
  );
};

export default Pokemon;
