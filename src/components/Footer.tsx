import moment from "moment"
import { BsInstagram } from "react-icons/bs"
import { FiFacebook } from "react-icons/fi"
import { SiThreads } from "react-icons/si"
import { Link } from "react-router-dom"
import styled from "styled-components"

const FooterStyled = styled.footer`
    width: 100%;
    display: grid;
    gap: 2rem;
    padding: 2.4rem 0 2rem;
    color: #654c28;
    background-color: #936e3a11;

    & img {
        justify-self: center;
        width: 10rem;
    }

    & article {
        display: grid;
        gap: 1.5rem;

        & div {
            display: flex;
            align-items: center;
            justify-self: center;
            gap: 1.3rem;

            a {
                color: #654c28;

                & svg {
                    width: 1.6rem;
                    height: 1.6rem;
                    cursor: pointer;
                }
            }
        }

        & p {
            font-size: 1.1rem;
            text-align: center;
        }
    }
`

export default function Footer() {
    const now = moment()
    const year = now.year()

    const facebook = "https://www.facebook.com/profile.php?id=61558114124546"
    const instagram = "https://www.instagram.com/lucianob_compra_de_ouro"
    const threads = "https://www.threads.net/@lucianob_compra_de_ouro"

    return (
        <FooterStyled>
            <img src="logo.webp" alt="Luciano B Logo" />

            <article>
                <div>
                    <Link to={facebook}>
                        <FiFacebook />
                    </Link>
                    <Link to={instagram}>
                        <BsInstagram />
                    </Link>
                    <Link to={threads}>
                        <SiThreads />
                    </Link>
                </div>
                <p>© {year} Ourivesaria Luciano B, Todos Direitos Reservados</p>
            </article>
        </FooterStyled>
    )
}
