import styled from "styled-components";
import { enter } from "./StyleUtils/keyframes";
export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2vw;
    background-color:#bebebe;
`

export const Header = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
    width:100vw;
    padding: 2vw
`

export const Title = styled.h1<{duration: number}>`
font-size: 3rem;
animation: ${enter} ${props => props.duration}s ease-in;
`