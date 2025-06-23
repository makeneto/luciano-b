import type { JSX } from "react"
import styled from "styled-components"

const CardStyled = styled.div`
    display: grid;
    gap: 1.6rem;

    @media (max-width: 479px) {
        margin-top: 2rem;
        gap: 1rem;
    }

    & h1,
    & p {
        text-align: center;
    }

    & span {
        background-color: white;
        width: 6rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-self: center;
        border-radius: 50%;

        & svg {
            color: #936e3a;
            width: 2.5rem;
            height: 2.5rem;

            @media (max-width: 479px) {
                width: 2rem;
                height: 2rem;
            }
        }

        @media (max-width: 479px) {
            width: 4.5rem;
            height: 4.5rem;
        }
    }

    & h1 {
        font-size: 1.9rem;

        @media (min-width: 885px) and (max-width: 1439px) {
            font-size: 1.6rem;
        }

        @media (max-width: 479px) {
            font-size: 1.4rem;
        }
    }

    & p {
        color: #5f4725;
        font-size: 1.1rem;

        @media (min-width: 885px) and (max-width: 1439px) {
            font-size: 1rem;
        }

        @media (max-width: 479px) {
            font-size: 1rem;
        }
    }
`

type WhyChooseCardProps = {
    icon: JSX.Element
    title: string
    description: string
}

export default function WhyChooseCard({
    icon,
    title,
    description,
}: WhyChooseCardProps) {
    return (
        <CardStyled>
            <span>{icon}</span>
            <h1>{title}</h1>
            <p>{description}</p>
        </CardStyled>
    )
}
