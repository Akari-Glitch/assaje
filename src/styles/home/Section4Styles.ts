import styled from "styled-components";

export const Section4Styles = styled.section`
  margin-bottom: 8%;

  .arrow-next,
  .arrow-back {
    display: none;
    cursor: pointer;
  }

  .div-2 {
    display: flex;
    cursor: grab;
    overflow-x: scroll;
    user-select: none;
    margin-left: 5%;
    scroll-behavior: smooth;
  }

  .div-2::-webkit-scrollbar {
    display: none;
  }

  .div-2 img {
    user-select: none;
    width: 40vw;
    margin-right: 5%;
    scroll-snap-align: center;
  }

  .div-1 {
    display: flex;
    justify-content: center;
    margin-bottom: 10%;
  }
  .div-1 h1 {
    color: white;
    font-size: 6.8vw;

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-align: center;
  }

  @media (min-width: 765px) {
    margin-bottom: 10%;

    .div-1 {
      justify-content: space-around;
      align-items: Center;
    }
    .div-1 svg {
      color: #bd3039;
      height: 40px;
      width: 40px;
    }
    .arrow-next,
    .arrow-back {
      display: block;
    }

    .div-1 h1 {
      font-size: 5.5vw;
      -webkit-text-stroke-width: 0.1px;
    }

    @media (min-width: 1020px) {
      .div-1 h1 {
        font-size: 4.5vw;
      }

      .div-1 {
        justify-content: space-around;
        align-items: Center;
        margin-bottom: 5%;
      }

      .div-1 svg {
        width: 50px;
        height: 50px;
      }
      .div-2 img {
        width: 25vw;
        margin-right: 5%;
      }
    }
  }
`;
