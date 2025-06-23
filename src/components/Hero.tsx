import {
    ClipboardCheck,
    HandCoins,
    Handshake,
    TruckElectric,
} from "lucide-react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import Intro from "./Intro"
import IntroMobile from "./IntroMobile"

const HeroStyled = styled.header`
    padding: 7% 17% 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20rem;

    @media (min-width: 885px) and (max-width: 1439px) {
        margin-bottom: 15rem;
        padding-inline: 3%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding: 7% 13% 0;
        display: grid;
        gap: 5rem;
        margin-bottom: 9rem;
    }

    @media (max-width: 479px) {
        display: flex;
        flex-wrap: wrap-reverse;
        padding: 2rem 4% 0;
        margin-bottom: 7rem;
        gap: 1rem;
    }

    & aside:first-child {
        width: 38%;
        display: grid;

        @media (max-width: 884px) {
            width: 100%;
        }

        & div {
            display: grid;
            gap: 2rem;

            @media (max-width: 479px) {
                gap: 0;
            }

            & a {
                position: relative;
                margin-top: 0.4rem;
                margin-left: 0.4rem;

                & div {
                    width: 100%;
                    height: 3.5rem;
                    background-color: #f2e2c4;
                    transition: all 0.1s ease-in;

                    @media (min-width: 885px) and (max-width: 1439px) {
                        height: 3rem;
                    }
                }

                & button {
                    width: 100%;
                    height: 100%;
                    background-color: #010d26;
                    color: #fffaf5;
                    position: absolute;
                    top: -0.4rem;
                    left: -0.4rem;
                    font-size: 1rem;
                    text-transform: uppercase;

                    @media (max-width: 479px) {
                        font-size: 0.8rem;
                        height: 3.5rem;
                    }
                }

                &:hover {
                    & div {
                        background-color: #936e3a;
                    }
                }
            }
        }

        & aside {
            margin-block: 3rem;
            height: fit-content;
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 7rem 7rem;

            @media (max-width: 479px) {
                margin-block: 2.5rem;
                grid-template-rows: 7rem;

                & div:nth-child(2) {
                    display: none;
                }
            }

            & div {
                padding-block: 1.3rem;
                gap: 0.8rem;
                background-color: white;
                display: grid;
                border: 1px solid #936e3a;

                & svg {
                    width: 1.8rem;
                    height: 1.8rem;
                    color: #936e3a;
                    justify-self: center;

                    @media (max-width: 479px) {
                        width: 2rem;
                        height: 2rem;
                    }
                }

                & span {
                    justify-self: center;
                    font-weight: 500;

                    @media (max-width: 479px) {
                        font-size: 0.8rem;
                    }
                }
            }
        }

        & article {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 0.6rem;

            & svg {
                color: #010d26;
            }

            & p {
                background-color: #f0e004;
                padding-inline: 0.3rem;

                @media (max-width: 479px) {
                    font-size: 0.9rem;
                    padding: 0.2rem 0.4rem;
                }
            }
        }

        @media (min-width: 885px) and (max-width: 1439px) {
            width: 38%;
        }
    }

    & article {
        width: 49%;
        position: relative;
        display: flex;

        & div,
        & img {
            width: 100%;
            height: 52rem;

            @media (min-width: 885px) and (max-width: 1439px) {
                width: 100%;
                height: 41.1rem;
            }

            @media (max-width: 884px) {
                height: auto;
            }
        }

        & div {
            position: absolute;
            top: 4%;
            z-index: 1;
            background-color: #fbf2e7;

            @media (min-width: 481px) and (max-width: 884px) {
                left: 2%;
                top: 14%;
            }

            @media (max-width: 479px) {
                display: none;
            }
        }

        & img {
            position: absolute;
            left: -5%;
            z-index: 2;

            @media (max-width: 884px) {
                position: relative;
                left: 0;
            }
        }

        & img:last-child {
            width: 19%;
            height: auto;
            position: absolute;
            top: 54%;
            left: 100%;
            transform: translateY(-50%);

            @media (min-width: 885px) and (max-width: 1439px) {
                display: none;
            }
        }

        @media (min-width: 885px) and (max-width: 1439px) {
            width: 41%;
        }

        @media (min-width: 481px) and (max-width: 884px) {
            width: 100%;
        }

        @media (max-width: 479px) {
            width: 100%;
        }
    }
`

type LargeTitleProps = {
    align: string
}

export const LargeTitle = styled.h1<LargeTitleProps>`
    font-size: 3.6rem;
    font-weight: 600;
    text-align: ${({ align }) => (align === "center" ? "center" : "")};
    margin: ${({ align }) => (align === "center" ? "0 200px 10.2rem" : "")};

    @media (min-width: 885px) and (max-width: 1439px) {
        font-size: 2.6rem;
        margin: ${({ align }) => (align === "center" ? "0 15rem 7.2rem" : "")};
    }

    @media (min-width: 481px) and (max-width: 884px) {
        font-size: 2.6rem;
        margin: ${({ align }) =>
            align === "center" ? "0 2.5rem 10.2rem" : ""};
    }

    @media (max-width: 479px) {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 300;
        margin: 0 0.2rem 4rem;
    }
`

export default function Hero() {
    const isMobile = useMediaQuery({ maxWidth: 479 })

    return (
        <HeroStyled>
            <aside>
                <div>
                    {isMobile ? <IntroMobile /> : <Intro />}

                    <a href="#contact">
                        <div></div>
                        <button>Fale Connosco</button>
                    </a>
                </div>

                <aside>
                    <div>
                        <TruckElectric />
                        <span>Deslocação gratuita</span>
                    </div>
                    <div>
                        <ClipboardCheck />
                        <span>Avaliação Gratuita</span>
                    </div>
                    <div>
                        <Handshake />
                        <span>Pagamento da Hora</span>
                    </div>
                </aside>

                <article>
                    <HandCoins />
                    <p>Ganhe 10% de Comissão por Cada Indicação!</p>
                </article>
            </aside>

            <article>
                <div></div>
                <img src="/assets/hero.webp" alt="Hero Image" loading="lazy" />
                <img
                    src="/assets/patterns/pattern-right.webp"
                    alt="Hero Pattern"
                    loading="lazy"
                />
            </article>
        </HeroStyled>
    )
}
