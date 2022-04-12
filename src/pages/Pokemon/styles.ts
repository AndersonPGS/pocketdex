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

  h1,
  p {
    text-transform: capitalize;
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

export const PokemonProfile = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const PokemonImage = styled.div`
  height: 350px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  background: rgba(59, 55, 72, 0.6);
  box-shadow: 6px 7px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: relative;
  transition: all 0.3s;
  img {
    width: 90%;
    position: relative;
    top: 0;
    flex-shrink: 0;
    transition: all 0.3s;
  }

  .data {
    width: 100%;
    height: 100px;
    padding: 10px 0;
    position: absolute;
    bottom: -110px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--yellow);
    border-radius: 20px;
    transition: all 0.3s;

    .data-fragment {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        padding: 0;
        font-weight: 200;
        font-size: 1.5rem;
        color: var(--primary);
      }

      p {
        color: var(--primary);
        font-size: 2rem;
      }
    }
  }

  &:hover {
    overflow: visible;
    img {
      position: relative;
      top: -80px;
      filter: drop-shadow(6px 7px 4px rgba(0, 0, 0, 0.25));
    }

    .data {
      position: absolute;
      bottom: 0px;
    }
  }
`;

export const PokemonData = styled.div`
  height: 340px;
  width: 70%;
  transform: translateX(-5px);
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(
    270deg,
    rgba(59, 55, 72, 0.6),
    rgba(59, 55, 72, 0)
  );
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 36px 36px 0px;

  .infos {
    margin: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info {
      h1 {
        padding: 0;
        margin: 0;
        margin-bottom: 5px;
        color: var(--text-secondary);
        font-size: 1.7rem;
      }

      p {
        color: var(--text-primary);
        font-size: 1.4rem;
        font-weight: 600;
      }
      p.hidden {
        color: var(--text-primary);
        opacity: 0.8;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }

  .stats {
    margin: 25px;
    width: 50%;
    h1 {
      padding: 0;
      margin: 0;
      margin-bottom: 5px;
      color: var(--text-secondary);
      font-size: 1.7rem;
    }
  }
`;

interface StatProps {
  percentage?: number;
}
export const Stat = styled.div<StatProps>`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;

  p {
    color: var(--text-primary);
    font-size: 1.4rem;
    font-weight: 600;
    text-overflow: ellipsis;
  }

  .progress {
    background: rgba(196, 196, 196, 0.3);
    width: 70%;
    height: 22px;
    border-radius: 25px;

    .bar {
      width: ${(props) => `${props.percentage}%`};
      height: 100%;
      border-radius: 25px;
      background: var(--red);
      background: ${(props) =>
        props.percentage && props.percentage >= 30 ? "var(--orange)" : ""};
      background: ${(props) =>
        props.percentage && props.percentage >= 40 ? "var(--yellow)" : ""};
      background: ${(props) =>
        props.percentage && props.percentage >= 70 ? "var(--green)" : ""};
    }
  }
`;
