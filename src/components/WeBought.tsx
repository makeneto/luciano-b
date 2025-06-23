import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import WeBoughtIntroMobile from "./WeBoughtIntroMobile"

const WeBoughtStyled = styled.section`
    padding: 7% 17%;
    background-color: #010d26;

    @media (min-width: 885px) and (max-width: 1439px) {
        padding-inline: 3%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding: 6rem 5%;
    }

    @media (max-width: 479px) {
        padding: 4rem 4%;
    }

    & article {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 4rem;

        & div {
            width: 100%;
            height: 9rem;
            overflow: hidden;
            border-radius: 999rem 999rem 0px 0px;

            @media (min-width: 481px) and (max-width: 884px) {
                height: 11rem;
            }

            @media (max-width: 479px) {
                height: 13rem;
            }
        }

        & div:first-child {
            background: url("/assets/webought/webought-1.webp") center center;
            background-size: cover;
        }

        & div:nth-child(2) {
            background: url("/assets/webought/webought-2.webp") center center;
            background-size: cover;

            @media (min-width: 481px) and (max-width: 884px) {
                display: none;
            }
        }

        & div:nth-child(3) {
            background: url("/assets/webought/webought-3.webp") center center;
            background-size: cover;

            @media (min-width: 481px) and (max-width: 884px) {
                display: none;
            }
        }

        & div:last-child {
            background: url("/assets/webought/webought-4.webp") center center;
            background-size: cover;
        }
    }

    & h1 {
        color: #fbf2e8;
        font-size: 3.6rem;
        font-weight: 600;
        text-align: center;

        @media (min-width: 481px) and (max-width: 884px) {
            font-size: 3rem;
        }

        @media (max-width: 479px) {
            font-size: 2.6rem;
        }
    }
`

export default function WeBought() {
    const isMobile = useMediaQuery({ maxWidth: 479 })

    return (
        <WeBoughtStyled>
            <article>
                <div></div>
                {!isMobile && (
                    <>
                        <div></div>
                        <div></div>
                        <div></div>
                    </>
                )}
            </article>

            {isMobile ? (
                <WeBoughtIntroMobile />
            ) : (
                <h1>
                    Ouro velho, riscado ou danificado? <br />
                    Compramos mesmo assim!
                </h1>
            )}
        </WeBoughtStyled>
    )
}
