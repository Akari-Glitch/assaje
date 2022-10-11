import styled from "styled-components";

export const PolicyStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 150px;

  p,
  h1 {
    margin-bottom: 20px;
  }

  table {
    margin-bottom: 20px;
    overflow-x: scroll;

    padding: 10px;
  }

  td {
    border: 1px solid black;
  }

  @media (min-width: 765px) {
    margin-top: 5%;

    p,
    h1 {
      margin-bottom: 40px;
    }
  }
`;
