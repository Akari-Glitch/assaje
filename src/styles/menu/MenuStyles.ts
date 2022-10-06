import styled from "styled-components";

export const MenuStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;

  justify-content: center;
  margin: auto;
  margin-top: 200px;
  margin-bottom: 80px;

  @media (min-width: 765px) {
    margin-top: 100px;

    .list-menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      width: 68%;
    }

    @media (min-width: 800px) {
      justify-content: space-around;
    }
  }
`;
