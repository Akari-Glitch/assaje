import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  background: black;
  color: white;
  padding: 0;
  padding-top: 70px;
  padding-bottom: 40px;
  font-size: 20px;

  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 90%;
    height: 70vh;
  }
  .small-font {
    font-size: 14px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  p {
    margin-top: 20px;
  }

  svg {
    width: 30px;
  }

  .facebook {
    margin-left: 15px;
  }

  .politics {
    display: flex;
    width: 100%;
    min-width: 280px;
    max-width: 400px;
    justify-content: space-between;
  }

  @media (min-width: 765px) {
    p {
      min-width: 320px;
      max-width: 320px;
      width: 320px;
    }
    .footer-container {
      flex-direction: row;
      height: 30vh;
      flex-wrap: wrap;
      max-width: 1000px;
      justify-content: space-between;
    }

    p {
      text-align: center;
    }
    @media (min-width: 1020px) {
      p {
        width: auto;
        min-width: auto;
        max-width: auto;
      }
      .footer-container {
        height: 20vh;
      }

      @media (min-width: 1620px) {
        .footer-container {
          max-width: 70%;
        }
        font-size: 1vw;
        .small-font {
          font-size: 0.8vw;
        }

        .politics {
          max-width: 100%;
          width: 15vw;
        }

        @media (min-width: 2000px) {
          svg {
            width: 3vw;
          }
        }
      }
    }
  }
`;
