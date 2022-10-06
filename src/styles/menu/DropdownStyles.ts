import styled from "styled-components";

export const DropdownStyles = styled.div`
  width: 100%;
  h2 {
    color: #bd3039;
    width: 100%;
    font-size: 20px;
  }
  .drop:after {
    content: ">";
    transform: rotate(90deg);
    display: inline-block;
    margin-left: 9px;
    position: relative;
    top: -3px;
    font-weight: bold;
  }

  .active:after {
    transform: rotate(-90deg);
    margin-left: 11px;
  }

  .list-food li {
    list-style: none;
    cursor: pointer;
    user-select: none;
    margin-top: 10px;
    font-size: 20px;
  }

  .list-food {
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.2s ease-in-out;
  }

  .list-food-active {
    max-height: 500px;
  }

  .list-food li:first-child {
    margin-top: 25px;
  }

  @media (min-width: 765px) {
    width: 210px;
    margin-top: 30px;
    .list-food {
      width: 100%;
      max-height: 100%;
    }

    h2 {
      font-size: 19px;
    }
    .list-food li {
      font-size: 16px;
    }
    .drop:after {
      content: "";
    }

    .current {
      font-weight: bold;
    }
    @media (min-width: 820px) {
      width: 220px;
      .list-food li {
        font-size: 18px;
      }
      h2 {
        font-size: 22px;
      }

      @media (min-width: 1020px) {
        width: 250px;
        @media (min-width: 1650px) {
          width: 250px;

          width: 15vw;

          h2 {
            font-size: 1.4vw;
          }

          .list-food li {
            font-size: 1.2vw;
          }
        }
      }
    }
  }
`;
