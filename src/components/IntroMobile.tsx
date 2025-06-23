// components/AnimatedTitle.tsx
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const Main = styled.main`
    margin-bottom: 2rem;
`

const MainTitle = styled.h1`
    font-weight: 600;
    text-align: center;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
`

const WordBox = styled.div`
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    position: relative;
    height: 2.3rem;
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
    position: absolute;
    width: 100%;
    text-align: center;
    font-weight: 600;
    color: #a38100;
    animation: ${({ active }) => (active ? slideUpFade : "none")} 2s ease-in-out;
    opacity: ${({ active }) => (active ? 1 : 0)};
`

const words = [
    "Anéis",
    "Fios",
    "Relógios",
    "Mascotes",
    "Pulseiras",
    "Brincos",
    "Pingentes",
]

export default function IntroMobile() {
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <Main>
            <MainTitle>Nós Compramos</MainTitle>
            <WordBox>
                {words.map((word, i) => (
                    <AnimatedWord key={i} active={i === index}>
                        {word}
                    </AnimatedWord>
                ))}
            </WordBox>
        </Main>
    )
}
