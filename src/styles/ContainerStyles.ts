import styled from "styled-components";

export const ContainerStyles = styled.main`
  overflow-x: hidden;
  .ultra-small {
    font-size: 11px;
  }
  .small {
    font-size: 15px;
  }
  .middle-small {
    font-size: 17px;
  }
  .middle {
    font-size: 18px;
  }
  .extra-middle {
    font-size: 25px;
  }
  .big {
    font-size: 23px;
  }
  .extra-big {
    font-size: 28px;
  }
  @media (min-width: 765px) {
    .middle {
      font-size: 22px;
    }
    .middle-small {
      font-size: 18px;
    }
    .big {
      font-size: 27px;
    }
    .extra-middle {
      font-size: 30px;
    }
    .extra-big {
      font-size: 32px;
    }
    @media (min-width: 1020px) {
      .extra-middle {
        font-size: 2.6vw;
      }
      .extra-big {
        font-size: 3.5vw;
      }
      @media (min-width: 1650px) {
        .middle {
          font-size: 1.4vw;
        }
        .middle-small {
          font-size: 1.1vw;
        }
        .ultra-small {
          font-size: 0.8vw;
        }
        .small {
          font-size: 1.1vw;
        }
        .big {
          font-size: 1.8vw;
        }
      }
    }
  }
`;
