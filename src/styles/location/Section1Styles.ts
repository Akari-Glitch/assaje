import styled from "styled-components";

export const Section1Styles = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  width: 90%;
  margin-right: auto;
  margin-left: auto;

  .div-1 {
    width: 100%;
  }

  .div-1 img {
    max-width: 100%;
    min-height: 450px;
  }

  .title {
    margin-top: 40px;
  }

  .p-1,
  .p-2 {
    margin-top: 20px;
  }
  .p-3 {
    margin-top: 40px;
    font-weight: bold;
  }
  margin-bottom: 15%;

  @media (min-width: 850px) {
    margin-top: 10px;
    position: relative;
    flex-direction: row;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-end;
    align-items: Center;
    margin-bottom: 10%;

    .div-2 {
      width: 50%;
    }

    .div-1 {
      position: relative;
      left: -10%;
      width: 55%;
    }
  }
`;
