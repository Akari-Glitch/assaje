import styled from "styled-components";

export const Section1Styles = styled.section`
  width: 90%;
  margin: auto;
  margin-bottom: 80px;
  .img-1 {
    margin-top: 150px;
  }

  .div-img {
    background: blue;
  }

  .title {
    color: #bd3039;
  }
  .img {
    width: 100%;
    margin-bottom: 40px;
  }

  p {
    margin-top: 20px;
  }

  .bold {
    font-weight: bold;
  }
  @media (min-width: 580px) {
    .img {
      height: 100vh;
    }
    @media (min-width: 765px) {
      margin-top: 0;
      display: flex;
      flex-direction: row-reverse;
      align-items: Center;
      justify-content: space-around;
      .div-info {
        max-width: 500px;
      }
      .img {
        position: relative;
        width: 50%;
      }
      p {
        margin-top: 40px;
      }
      .img-1 {
        margin-top: 0px;
      }

      .rightmost {
        right: -10%;
      }
      @media (min-width: 1020px) {
        .img {
          width: 55%;
        }

        .div-info {
          max-width: 550px;
        }

        @media (min-width: 1650px) {
          .div-info {
            width: 50%;
            max-width: 100%;
          }
        }
      }
    }
  }
`;
