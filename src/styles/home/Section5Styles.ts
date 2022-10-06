import styled from "styled-components";

export const Section5Styles = styled.div`
  .title-1 {
    text-align: Center;
    font-size: 5vw;
    margin-bottom: 10%;
  }

  .title-1 a {
    color: black;
  }

  .div-2 {
    display: flex;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: center;
    background-color: #e6e7e8;
  }

  .div-2 form {
    display: flex;
    align-items: center;
    height: 35vh;
    justify-content: space-around;
    flex-direction: column;
    width: 90%;
  }

  .title-2 {
    text-align: center;
    color: #bd3039;
    font-size: 30px;
  }

  .input-1-container {
    position: Relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .input-1 {
    width: 100%;
    height: 60px;
    font-size: 30px;
    background: rgba(0, 0, 0, 0);
    border: none;
    border-bottom: 5px solid #d9dada;
    outline: none;
  }

  .input-1::placeholder {
    color: #d9dada;
  }

  .send {
    position: absolute;
    right: 0;
    color: #d9dada;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .send:hover {
    color: black;
  }

  .input-1:focus {
    outline: none;
    border-bottom: 3px solid #bd3039;
  }

  .div-2 label {
    display: flex;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .div-2 label div {
    width: 90%;
    margin-top: 15px;
  }
  .div-2 a {
    color: black;
    margin-left: 2px;
  }

  @media (min-width: 550px) {
    .title-1 {
      font-size: 3.5vw;
    }
    @media (min-width: 765px) {
      .title-2 {
        font-size: 55px;
      }

      .input-1 {
        font-size: 30px;
      }

      .input-1::placeholder {
        font-size: 55px;
      }
      .div-2 form {
        height: 30vh;
      }

      .input-1-container {
        width: 50%;
      }
      .title-1 {
        font-size: 2.5vw;
      }

      @media (min-width: 1020px) {
        .input-1-container {
          width: 40%;
        }

        .title-1 {
          font-size: 2vw;
        }

        @media (min-width: 1350px) {
          .input-1-container {
            width: 35%;
          }

          @media (min-width: 1620px) {
            .title-2 {
              font-size: 3vw;
            }
          }
        }
      }
    }
  }
`;
