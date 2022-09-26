import styled from "styled-components";

export const VeniTrovarciStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;

  h1 {
    font-size: 9.4vw;
    letter-spacing: 0.8vw;
    color: #bd3039;
  }

  h2 {
    font-size: 5.7vw;
    color: white;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: black;
  }

  @media (min-width: 765px) {
    h1 {
      font-size: 7.8vw;
      letter-spacing: 0.4vw;
    }

    h2 {
      font-size: 4.4vw;
    }

    margin-bottom: 5%;
    @media (min-width: 1020px) {
      h1 {
        font-size: 5.8vw;
        letter-spacing: 0.4vw;
      }

      h2 {
        font-size: 3.4vw;
      }
    }
  }
`;
