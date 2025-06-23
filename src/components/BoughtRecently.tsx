import styled from "styled-components"

import RecentlyCard from "./ui/RecentlyCard"

const BoughtRecentlyStyled = styled.section`
    background-color: #fbf2e8;
    padding: 7% 17% 16.7rem;

    @media (min-width: 885px) and (max-width: 1439px) {
        padding: 8% 3% 11%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding: 6rem 5% 12rem;
    }

    @media (max-width: 479px) {
        padding: 4rem 4%;
    }

    & aside {
        margin-bottom: 8rem;

        @media (min-width: 481px) and (max-width: 884px) {
            margin-bottom: 6rem;
        }

        @media (max-width: 479px) {
            margin-bottom: 5rem;
        }

        & h1 {
            font-size: 3.6rem;
            font-weight: 600;
            text-align: center;
            margin: 0 200px 2.5rem;

            @media (min-width: 885px) and (max-width: 1439px) {
                font-size: 2.6rem;
                margin-inline: 15rem;
            }

            @media (min-width: 481px) and (max-width: 884px) {
                font-size: 2.6rem;
                margin: 0 2.5rem 2rem;
            }

            @media (max-width: 479px) {
                text-align: center;
                font-size: 1.8rem;
                font-weight: 300;
                margin: 0 0.2rem 1.8rem;
            }
        }

        & p {
            text-align: center;
            font-size: 1.4rem;
            margin-inline: 200px;

            @media (min-width: 885px) and (max-width: 1439px) {
                margin-top: -1rem;
                font-size: 1.2rem;
                margin-inline: 15rem;
            }

            @media (min-width: 481px) and (max-width: 884px) {
                margin-inline: 2.5rem;
            }

            @media (max-width: 479px) {
                font-size: 1rem;
                margin-inline: 0;
            }
        }
    }

    & article {
        display: flex;
        justify-content: space-between;

        @media (min-width: 481px) and (max-width: 884px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4.4rem;

            & div:nth-child(3) {
                grid-column: 1 / -1;
                justify-self: center;
                width: 50%;
            }
        }

        @media (max-width: 479px) {
            display: grid;
            gap: 4rem;
        }
    }
`

export default function BoughtRecently() {
    return (
        <BoughtRecentlyStyled>
            <aside>
                <h1>Peças compradas recentemente</h1>
                <p>
                    Garantimos total tranquilidade - se nossa proposta não
                    atender às suas expectativas, você pode recusá-la sem
                    compromisso.
                </p>
            </aside>

            <article>
                <RecentlyCard
                    image="assets/recently/recently-1.webp"
                    description="Fio de Ouro Português"
                    price={950000}
                />

                <RecentlyCard
                    image="assets/recently/recently-2.webp"
                    description="Brincos de Ouro Português 19k"
                    price={170000}
                />

                <RecentlyCard
                    image="assets/recently/recently-3.webp"
                    description="Pandora de Ouro Português"
                    price={480000}
                />
            </article>
        </BoughtRecentlyStyled>
    )
}
