import styled from "styled-components"

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 17% 0;

    @media (min-width: 885px) and (max-width: 1440px) {
        padding: 3rem 3% 0;
    }

    @media (min-width: 480px) and (max-width: 884px) {
        gap: 4rem;
        padding-inline: 5%;
    }

    @media (max-width: 479px) {
        display: none;
    }

    & img {
        width: 10rem;

        @media (min-width: 885px) and (max-width: 1439px) {
            width: 8rem;
        }
    }

    & aside {
        height: 66.59px;
        display: flex;
        align-items: center;
        gap: 4rem;

        @media (min-width: 481px) and (max-width: 884px) {
            gap: 2rem;
        }

        a {
            color: #010d26;
        }

        & div {
            width: 15rem;

            & a {
                position: relative;
                margin-top: 0.4rem;
                margin-left: 0.4rem;

                & div {
                    width: 97.6%;
                    height: 2.7rem;
                    background-color: #f2e2c4;
                    transition: all 0.1s ease-in;

                    @media (min-width: 885px) and (max-width: 1439px) {
                        height: 2.7rem;
                    }
                }

                & button {
                    width: 100%;
                    height: 3.3rem;
                    background-color: #010d26;
                    color: #fffaf5;
                    position: absolute;
                    top: 0.4rem;
                    left: -0.8rem;
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
    }
`

export default function NavBar() {
    return (
        <NavStyled>
            <img src="logo.webp" alt="Luciano B Logo" />
            <aside>
                <a href="#steps">Como funciona</a>
                <a href="#faqs">Perguntas frequentes</a>

                <div>
                    <a href="#contact">
                        <div></div>
                        <button>Começar</button>
                    </a>
                </div>
            </aside>
        </NavStyled>
    )
}
