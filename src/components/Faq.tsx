import styled from "styled-components"

import { faqData } from "../data/faqData"
import FaqItem from "./ui/FaqItem"
import { LargeTitle } from "./Hero"

const FAQContainer = styled.div`
    margin: 13rem auto 13rem;
    padding-inline: 17%;
    border-radius: 10px;

    @media (min-width: 885px) and (max-width: 1439px) {
        padding-inline: 3%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding-inline: 5%;
    }

    @media (max-width: 479px) {
        padding-inline: 4%;
        margin: -4rem auto 6rem;
    }
`

export default function Faq() {
    return (
        <FAQContainer id="faqs">
            <LargeTitle align="center" style={{ marginBottom: "5.2rem" }}>
                Perguntas frequentes sobre venda de ouro
            </LargeTitle>

            {faqData.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </FAQContainer>
    )
}
