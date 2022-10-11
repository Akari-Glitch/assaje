import styled from "styled-components";

export const ContainerStyles = styled.main`
  overflow-x: hidden;
  .ultra-small {
    font-size: 12px;
  }

  .small {
    font-size: 16px;
  }

  .middle {
    font-size: 19px;
  }

  .big {
    font-size: 24px;
  }

  .extra-big {
    font-size: 29px;
  }

  @media (min-width: 765px) {
    .middle {
      font-size: 24px;
    }

    .big {
      font-size: 29px;
    }

    .extra-middle {
      font-size: 32px;
    }
    .extra-big {
      font-size: 34px;
    }

    @media (min-width: 1020px) {
      .extra-middle {
        font-size: 2.8vw;
      }
      .extra-big {
        font-size: 4vw;
      }
      @media (min-width: 1650px) {
        .middle {
          font-size: 1.6vw;
        }
        .ultra-small {
          font-size: 0.8vw;
        }
        .small {
          font-size: 1.1vw;
        }
        .big {
          font-size: 2vw;
        }
      }
    }
  }
`;
