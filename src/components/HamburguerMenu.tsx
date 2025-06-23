import { AlignJustify, X } from "lucide-react"
import { useState } from "react"
import styled from "styled-components"

const Nav = styled.nav`
    position: relative;
    z-index: 999;
    padding: 1rem 13% 0;

    @media (max-width: 479px) {
        padding: 1rem 4% 0;
    }

    & section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & img {
            width: 9rem;

            @media (max-width: 479px) {
                width: 5rem;
            }
        }

        & svg {
            width: 2rem;
            height: 2rem;
            cursor: pointer;
        }
    }
`

const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
`

const Menu = styled.div<{ isOpen: boolean }>`
    width: 93%;
    padding: 2rem;
    position: absolute;
    top: 20px;
    left: 50%;
    background-color: #fbf2e7;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transform: ${({ isOpen }) =>
        isOpen ? "translate(-50%, 26%)" : "translate(-50%, -20px)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    transition: all 0.3s ease;

    & div {
        margin-top: 0.6rem;
        margin-left: 0.4rem;

        & a {
            position: relative;

            & div {
                width: 98%;
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
                top: 0.1rem;
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
`

const MenuItem = styled.a`
    text-align: center;
    padding-block: 0.2rem;
    text-decoration: none;
    color: #333;
`

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prev) => !prev)
    const closeMenu = () => setIsOpen(false)

    return (
        <Nav>
            <section>
                <img src="logo.webp" alt="Luciano B Logo" />

                <ToggleButton onClick={toggleMenu}>
                    {isOpen ? <X /> : <AlignJustify />}
                </ToggleButton>
            </section>

            <Menu isOpen={isOpen}>
                <MenuItem href="#steps" onClick={closeMenu}>
                    Como funciona
                </MenuItem>
                <MenuItem href="#faqs" onClick={closeMenu}>
                    Perguntas frequentes
                </MenuItem>

                <div onClick={closeMenu}>
                    <a href="#contact">
                        <div></div>
                        <button>Fale Connosco</button>
                    </a>
                </div>
            </Menu>
        </Nav>
    )
}
