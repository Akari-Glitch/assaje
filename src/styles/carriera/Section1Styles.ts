import styled from "styled-components";

export const Section1Styles = styled.section`
  width: 90%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 80px;
  img {
    width: 100%;
  }

  h1 {
    margin-top: 40px;
  }

  p {
    margin-top: 20px;
    width: 80%;
  }

  .bold {
    font-weight: bold;
  }

  @media (min-width: 765px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: Space-around;
    align-items: center;
    margin-top: 0;

    img {
      position: relative;
      right: -10%;
      width: 50%;
    }

    h1 {
      margin-top: 0px;
    }
    p {
      margin-top: 40px;
      width: 60%;
      min-width: 400px;
    }

    @media (min-width: 1020px) {
      margin-bottom: 0px;

      img {
        width: 60%;
      }

      p {
        width: 80%;
      }
    }
  }
`;
