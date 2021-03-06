import React from "react";
import { Container, Link, Menu, Wrapper } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Link href="/">Home</Link>
          <Link
            href="https://github.com/andersonpgs/pocketdex"
            target={"_blank"}
          >
            Github
          </Link>
          <Link href="https://pokeapi.co/" target={"_blank"}>
            API
          </Link>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Header;
