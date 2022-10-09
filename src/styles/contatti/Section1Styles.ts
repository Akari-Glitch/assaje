import styled from "styled-components";

export const Section1Styles = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 40px;

  .div-1 {
    width: 100%;
  }
  .div-1 .img {
    background-image: url("/images/contatti/img1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    min-width: 100%;
    height: 60vh;
    min-height: 400px;
  }

  .title {
    margin-top: 40px;
    width: 70%;
    margin-bottom: 10px;
  }

  .contatti-info {
    display: flex;
    flex-direction: column;
  }
  .contatti-info div {
    margin-top: 20px;
  }

  @media (min-width: 500px) {
    .div-1 .img {
      height: 100vh;
    }

    @media (min-width: 765px) {
      margin-top: 10px;
      position: relative;
      flex-direction: row;
      width: 90%;
      margin-right: auto;
      margin-left: auto;
      justify-content: flex-end;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10%;

      .contatti-info div {
        margin-top: 40px;
      }

      .div-1 {
        position: Relative;
        left: -10%;
        width: 100%;
      }
      .div-2 {
        width: 100%;
        max-width: 600px;
      }
      .div-1 .img {
        width: 100%;
        height: 50vh;
      }

      .contatti-info {
        flex-direction: Row;
        flex-wrap: wrap;
        width: 100%;
        min-width: 350px;
      }

      .contatti-info div {
        width: 50%;
      }

      @media (min-width: 1020px) {
        justify-content: space-around;

        .div-1 .img {
          height: 90vh;
        }

        .div-1 {
          max-width: 50vw;
        }
      }
    }
  }
`;
