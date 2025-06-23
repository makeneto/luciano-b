import styled from "styled-components"

import Step from "./ui/Step"
import { LargeTitle } from "./Hero"

const StepsStyled = styled.main`
    padding-inline: 17%;
    margin-bottom: 8rem;

    & div {
        display: grid;
        gap: 4rem;

        @media (min-width: 481px) and (max-width: 884px) {
            align-self: center;
        }

        @media (max-width: 479px) {
            gap: 8.6rem;
        }
    }

    @media (min-width: 885px) and (max-width: 1439px) {
        padding-inline: 3%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        padding-inline: 5%;
    }

    @media (max-width: 479px) {
        padding-inline: 4%;
    }
`

export default function Steps() {
    return (
        <StepsStyled id="steps">
            <LargeTitle align="center">
                Transparência, agilidade & confiança em cada etapa
            </LargeTitle>

            <div>
                <Step
                    stepNumber={1}
                    stepTitle="Fale Connosco"
                    stepDescription="Envie-nos uma mensagem ou ligue-nos diretamente. Estamos prontos para esclarecer dúvidas e iniciar o processo com total discrição."
                    stepImage="assets/steps/step-1.webp"
                    imageDirection="right"
                />

                <Step
                    stepNumber={2}
                    stepTitle="Avaliação Justa"
                    stepDescription="O seu ouro é avaliado por profissionais experientes, utilizando equipamentos precisos. Sem custos ou obrigações."
                    stepImage="assets/steps/step-2.webp"
                    imageDirection="left"
                />

                <Step
                    stepNumber={3}
                    stepTitle="Receba o Seu Dinheiro Imediatamente"
                    stepDescription="Após a avaliação e aprovação, efetuamos o pagamento na hora, em dinheiro ou por transferência — como preferir."
                    stepImage="assets/steps/step-3.webp"
                    imageDirection="right"
                />
            </div>
        </StepsStyled>
    )
}
