import styled from "styled-components"

import { formatCurrency } from "../../utils/formatCurrency"

const RecentlyCardStyled = styled.div`
    width: 20rem;
    display: grid;
    gap: 1rem;

    @media (max-width: 479px) {
        padding-inline: 1.2rem;
        width: 100%;
    }

    & img {
        width: 100%;
    }

    & p {
        font-size: 1.3rem;
        font-weight: 500;

        @media (min-width: 885px) and (max-width: 1439px) {
            font-size: 1.1rem;
        }

        @media (max-width: 479px) {
            font-size: 1.1rem;
        }
    }

    & h1 {
        font-size: 2rem;
        font-weight: 600;

        @media (min-width: 885px) and (max-width: 1439px) {
            font-size: 1.7rem;
            margin-top: -0.5rem;
        }

        @media (max-width: 479px) {
            font-size: 1.6rem;
            margin-top: -0.5rem;
        }
    }

    @media (min-width: 885px) and (max-width: 1439px) {
        width: 22rem;
    }
`

type RecentlyCardProps = {
    image: string
    description: string
    price: number
}

export default function RecentlyCard({
    image,
    description,
    price,
}: RecentlyCardProps) {
    return (
        <RecentlyCardStyled>
            <img src={image} alt={description} loading="lazy" />
            <p>{description}</p>
            <h1>{formatCurrency(price)}</h1>
        </RecentlyCardStyled>
    )
}
