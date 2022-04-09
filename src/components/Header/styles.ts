import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    to right,
    rgba(43, 42, 42, 0.19),
    rgba(65, 62, 87, 0.26)
  );
  width: 100%;
  padding: 15px 16px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Menu = styled.div``;

export const Link = styled.a`
  color: var(--text-primary);
  margin-right: 45px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
    transform: scale(1.01);
  }
`;
