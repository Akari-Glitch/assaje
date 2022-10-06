import styled from "styled-components";

export const ListStyles = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;

  .scropi {
    margin-top: 5px;
    color: #bd3039;
    cursor: pointer;
    width: 100%;
  }
  .container-img {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f2f2;
    border-radius: 10px;
  }
  img {
    width: 100%;
    min-width: 100%;
  }

  ul {
    margin-top: 20px;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  .ingredients {
    max-height: 0;
    overflow-y: hidden;
  }

  .ingredients-active {
    max-height: 500px;
  }

  .extra {
    margin-top: 10px;
  }

  ul li {
    list-style: none;
  }
  h2 {
    font-size: 20px;
    margin-top: 20px;
    width: 100%;
  }

  @media (min-width: 765px) {
    max-width: 48%;

    h2 {
      font-size: 16px;
    }

    @media (min-width: 820px) {
      h2 {
        font-size: 19px;
      }
      @media (min-width: 1020px) {
        h2 {
          font-size: 23px;
        }

        @media (min-width: 1650px) {
          h2 {
            font-size: 1.5vw;
          }

          .scropi {
            font-size: 1.1vw;
          }
        }
      }
    }
  }
`;
