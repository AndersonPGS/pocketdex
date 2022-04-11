import styled from "styled-components";

export const Container = styled.div`
  /* position: absolute;
  bottom: 0;
  width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: var(--primary);
  -webkit-box-shadow: 0px -3px 0px 0px var(--text-secondary);
  -moz-box-shadow: 0px -3px 0px 0px var(--text-secondary);
  box-shadow: 0px -3px 0px 0px var(--text-secondary);

  a {
    text-decoration: none;
    margin: 20px;
    transition: all 0.2s;
  }

  a:hover {
    text-decoration: underline;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
  }
`;
