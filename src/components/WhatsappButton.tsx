import moment from "moment"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

type WhatsappButtonProps = {
    showButton: boolean
}

const WhatsappButtonStyled = styled(Link)<WhatsappButtonProps>`
    user-select: none;
    position: fixed;
    bottom: 2%;
    right: 2%;
    z-index: 999;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.071);

    background: url(/assets/whatsapp-logo.webp) center center;
    background-size: cover;

    width: 2.3rem;
    height: 2.3rem;
    border-radius: 0.3rem;
    transition: opacity 0.2s ease-in-out;

    opacity: ${({ showButton }) => (showButton ? 1 : 0)};

    @media (max-width: 479px) {
        bottom: 4%;
        right: 6%;
    }
`

export default function WhatsappButton() {
    const [showButton, setShowButton] = useState(false)
    const now = moment()
    const hour = now.hour()
    const [greeting, setGreeting] = useState<string>("")
    const whatsappMessage = `https://wa.me/244926296479?text=Ol%C3%A1%2C%20${greeting}!✨%20Venho%20pelo%20site%20e%20quero%20vender%20o%20meu%20ouro.🤝`

    useEffect(() => {
        if (hour < 12) {
            setGreeting("Bom%20Dia")
        } else if (hour < 18) {
            setGreeting("Boa%20Tarde")
        } else {
            setGreeting("Boa%20Noite")
        }
    }, [hour])

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <WhatsappButtonStyled
            showButton={showButton}
            to={whatsappMessage}
            rel="noopener noreferrer"
        />
    )
}
