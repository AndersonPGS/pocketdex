import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 130px);
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

export const PokemonProfile = styled.div``;
export const Title = styled.div`
  display: flex;
  align-items: center;

  a {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #2d2a38;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    transition: all 0.4s;
    cursor: pointer;

    img {
      height: 1.8rem;
      opacity: 0.8;
      transform: rotate(180deg);
      transition: all 0.2s;
    }

    &:hover {
      height: 55px;
      width: 55px;

      img {
        height: 1.9rem;
      }
    }
  }

  h1 {
    margin-left: 30px;

    span {
      font-size: 1.3rem;
      font-weight: 200;
      margin-left: 10px;
    }
  }
`;
