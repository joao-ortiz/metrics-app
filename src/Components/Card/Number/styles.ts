import styled, { keyframes } from "styled-components";

const enter = keyframes`
    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`

export const NumberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    height: 100%;
`

export const NumberDisplay = styled.h3<{number: number}>`{
    font-size: 3rem;
    font-weight: bold;
    color: ${props => props.number > 0 ? 'palegreen' : 'red'};
    margin: 0;
    line-height: 3rem;
    animation: ${enter} 0.2s ease-in;
      @media screen and (max-width: 900px) {
        font-size: 2.3rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
}`

export const Label = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    animation: ${enter} 0.8s ease-in;
    padding-left: 0.5rem;
    text-transform: capitalize;
    position: relative;
    top: 0.5rem;
    @media screen and (max-width: 900px) {
        top: 0.2rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1.8rem
      }
      @media screen and (max-width: 500px) {
        font-size: 2rem;
      }
`