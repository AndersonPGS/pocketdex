import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 105px);
  .blob1 {
    position: absolute;
    width: 1153px;
    height: 800px;
    left: 1000px;
    top: -280px;

    background: var(--purple);
    opacity: 0.2;
    filter: blur(240px);
    border-radius: 373px;
    z-index: -999;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    padding: 30px 0px;
  }
`;

export const Pokemons = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const Pokemon = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 20px 30px;
  margin: 20px 10px;
  background: rgba(80, 80, 80, 0.2);
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s, background 0.5s;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    text-overflow: ellipsis;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
    background: linear-gradient(
      to right,
      rgba(80, 80, 80, 0.2),
      rgba(80, 80, 80, 0.6)
    );
  }
`;

export const PageNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  .current {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 80px;
    background: #2d2a38;
    font-size: 1.7rem;
    cursor: default;
  }

  a {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #2d2a38;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.4s;

    img {
      height: 2rem;
      opacity: 0.8;
      transition: all 0.2s;
    }

    &#back {
      transform: translateX(5px);

      img {
        transform: rotate(180deg);
      }
    }

    &#next {
      transform: translateX(-5px);
    }

    &.disable {
      cursor: default;
      opacity: 0.8;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      &.disable:hover {
        img {
          opacity: 0.8;
        }
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      }
    }

    &:hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);

      img {
        opacity: 1;
      }
    }
  }
`;
