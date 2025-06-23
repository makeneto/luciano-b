import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Item = styled(motion.div)<{ isOpen: boolean }>`
    border-bottom: 1px solid #936e3a61;
    overflow: hidden;
    padding: 2.1rem 2.8rem;
    min-height: 7.5rem;
    transition: background 0.3s ease-in;

    background-color: ${({ isOpen }) => (isOpen ? "#936e3a47" : "")};

    &:last-child {
        border-bottom: none;
    }

    @media (min-width: 885px) and (max-width: 1439px) {
        padding: 1.6rem 2.8rem;
    }

    @media (max-width: 479px) {
        padding: 1.8rem 2rem;
    }
`

const Question = styled.h1`
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    padding-bottom: 3rem;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;
    height: 6rem;

    & svg {
        stroke-width: 1px;
    }

    @media (min-width: 885px) and (max-width: 1439px) {
        font-size: 1.7rem;
        padding-bottom: 2rem;
    }

    @media (max-width: 479px) {
        padding-bottom: 2rem;
        font-size: 1.3rem;
    }
`

const Answer = styled(motion.div)`
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 400;
    color: #3d2e19;
    border-radius: 5px;
    margin-bottom: 1rem;

    @media (max-width: 479px) {
        font-size: 1rem;
        line-height: 1.6rem;
        margin-bottom: 0;
    }
`

const StyledLink = styled(Link)`
    color: var(--light-blue);
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

interface FaqItemProps {
    question: string
    answer: string
}

export default function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    const renderAnswer = (text: string) => {
        const linkRegex = /<a href="(.*?)" target="_blank">(.*?)<\/a>/g
        const parts = text.split(linkRegex)

        return parts.map((part, index) => {
            if (index % 3 === 0) {
                return part
            } else if (index % 3 === 1) {
                const href = part
                const linkText = parts[index + 1]
                return (
                    <StyledLink key={index} to={href} target="_blank">
                        {linkText}
                    </StyledLink>
                )
            }
            return null
        })
    }

    return (
        <Item
            isOpen={isOpen}
            animate={{ height: isOpen ? "auto" : 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Question onClick={() => setIsOpen(!isOpen)}>
                {question}

                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Plus size={35} />
                </motion.div>
            </Question>

            <AnimatePresence>
                {isOpen && (
                    <Answer
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {renderAnswer(answer)}
                    </Answer>
                )}
            </AnimatePresence>
        </Item>
    )
}
