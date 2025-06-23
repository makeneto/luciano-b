import styled from "styled-components"
import { LargeTitle } from "./Hero"

const IntroStyled = styled.div`
    display: grid;
    gap: 2rem;

    & p {
        font-size: 1.1rem;
        line-height: 1.7rem;

        @media (min-width: 885px) and (max-width: 1439px) {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        @media (max-width: 479px) {
            font-size: 1rem;
            line-height: 1.574rem;
            text-align: center;
        }
    }
`

export default function Intro() {
    return (
        <IntroStyled>
            <LargeTitle align="left">
                Venda Seu Ouro com Confiança & Rapidez
            </LargeTitle>
            <p>
                Pagamento imediato e total confidencialidade. Vender ouro nunca
                foi tão seguro.
            </p>
        </IntroStyled>
    )
}
