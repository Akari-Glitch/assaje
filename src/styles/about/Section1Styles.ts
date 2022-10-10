import styled from "styled-components"
 
interface Props{
    image: string;
}
export const Section1Styles = styled.section<Props>`
    .img{
        background-image: ${(props) => props.image}
    }

`