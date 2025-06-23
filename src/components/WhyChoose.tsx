import styled from "styled-components"
import { Headset, Lock, Wallet } from "lucide-react"

import { LargeTitle } from "./Hero"
import WhyChooseCard from "./ui/WhyChooseCard"

const WhyChooseStyled = styled.section`
    background-color: #fbf2e8;
    padding: 7% 17%;

    & article {
        margin-top: -2.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;

        @media (min-width: 481px) and (max-width: 884px) {
            grid-template-columns: 1fr 1fr;

            & div:nth-child(3) {
                grid-column: 1 / -1;
                justify-self: center;
                width: 50%;
            }
        }

        @media (max-width: 479px) {
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
        }
    }

    @media (min-width: 885px) and (max-width: 1439px) {
        padding-inline: 3%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding: 5rem 5% 8rem;
    }

    @media (max-width: 479px) {
        padding: 3rem 4%;
    }
`

export default function WhyChoose() {
    return (
        <WhyChooseStyled>
            <LargeTitle align="center">Por que escolher a Luciano B</LargeTitle>

            <article>
                <WhyChooseCard
                    icon={<Wallet />}
                    title="Pagamento Rápido"
                    description="Receba o valor do seu produto de forma rápida e segura, sem burocracias ou atrasos."
                />
                <WhyChooseCard
                    icon={<Headset />}
                    title="Atendimento exclusivo"
                    description="Conte com uma equipe dedicada, pronta para oferecer suporte exclusivo em todas as etapas."
                />
                <WhyChooseCard
                    icon={<Lock />}
                    title="Encontros Seguros"
                    description="Garantimos sua privacidade e segurança em todas as etapas da negociação. edwfsfs"
                />
            </article>
        </WhyChooseStyled>
    )
}
