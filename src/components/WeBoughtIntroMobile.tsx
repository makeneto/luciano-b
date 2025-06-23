// components/AnimatedTitle.tsx
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const Main = styled.main`
    color: #fbf2e8;
    margin-bottom: 2rem;
`

const MainTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;

    color: #fbf2e8;
    font-weight: 600;
    text-align: center;
    font-size: 2.6rem;
`

const WordBox = styled.div`
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    position: relative;
    height: 3.5rem;
    overflow: hidden;
`

const slideUpFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`

const AnimatedWord = styled.div<{ active: boolean }>`
    font-weight: 600;
    position: absolute;
    width: 100%;
    text-align: center;
    color: #d4af85;
    animation: ${({ active }) => (active ? slideUpFade : "none")} 2s ease-in-out;
    opacity: ${({ active }) => (active ? 1 : 0)};
`

const words = ["Velho", "Amassado", "Riscado", "Danificado"]

export default function WeBoughtIntroMobile() {
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Main>
            <MainTitle>Ouro</MainTitle>
            <WordBox>
                {words.map((word, i) => (
                    <AnimatedWord key={i} active={i === index}>
                        {word}
                    </AnimatedWord>
                ))}
            </WordBox>
            <MainTitle>Compramos mesmo assim!</MainTitle>
        </Main>
    )
}
