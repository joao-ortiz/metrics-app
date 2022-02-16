import styled from "styled-components";
import { enter } from "../../StyleUtils/keyframes";

export const CardContainer = styled.div<{animationDur: number | undefined}>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    animation: ${enter} ${props=>props.animationDur}s ease-in;
    margin: 1vw;
    border-radius: 10px;
    transition: 0.3s all;
    height: 30vh;
    width: 17vw;
    background-color: white;

    &:hover{
        transform: scale(1.01);
        box-shadow: 0px 4px 20px 0px #d3d3d3;
    }
    @media screen and (max-width: 1200px) {
        height: 30vh;
        min-width: 22vw;
      }
      @media screen and (max-width: 900px) {
        height: 30vh;
        min-width: 29vw;
      }
      @media screen and (max-width: 600px) {
        height: 40vh;
        min-width: 44.66vw;
      }
      @media screen and (max-width: 500px) {
        height: 30vh;
        margin: 1vw 0;
        min-width: 94vw;
      }
`

export const Title = styled.h2`
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    animation: ${enter} 0.2s ease-in;
      border-bottom: dotted 1px #000;

    @media screen and (max-width: 1200px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 800px) {
        font-size: 1.3rem;
      }
      @media screen and (max-width: 600px) {
          font-size: 1.2rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 2rem;
      }
`

export const Description = styled.p`
    font-size: 1rem;
    align-self: flex-start;
    margin-top: 0.5rem;
    animation: ${enter} 0.5s ease-in;
    padding-top:0.5rem;
    border-top: dotted 1px #000;
    width: 100%;

    @media screen and (min-width: 1200px) {
        font-size: 1.1rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
`
