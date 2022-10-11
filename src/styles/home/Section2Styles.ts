import styled from "styled-components";

export const Section2Styles = styled.section`
  display: flex;
  width: 100%;
  margin-top: 70px;
  align-items: center;
  flex-direction: column;

  .div-1 {
    width: 90%;
  }

  .div-1 img {
    max-width: 100%;
  }

  .div-2 {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 400px;
  }

  .div-2 div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    width: 90%;
    height: 80%;
  }

  .p-2 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .p-1 i {
    color: #bd3039;
  }

  @media (min-width: 765px) {
    position: relative;
    flex-direction: row;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-end;
    margin-bottom: 10%;
    margin-top: 20%;
    .div-1 {
      position: absolute;
      left: -10%;
      width: 55%;
    }

    .div-1 img {
      min-height: 100%;
      min-width: 100%;
    }

    .div-2 {
      justify-content: flex-end;
      width: 50%;
    }

    @media (min-width: 1020px) {
      margin-bottom: 20%;
      .div-2 {
        align-items: center;
        justify-content: flex-start;
        width: 45%;
      }

      @media (min-width: 1600px) {
        margin-top: 25%;
        margin-bottom: 25%;
      }
    }
  }
`;
