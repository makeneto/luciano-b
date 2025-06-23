import styled from "styled-components"

type StepStyledProps = {
    direction: string
}

const StepStyled = styled.section<StepStyledProps>`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction }) =>
        direction === "left" ? "row-reverse" : ""};
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 10rem;

    @media (min-width: 481px) and (max-width: 884px) {
        margin-bottom: 3rem;
    }

    @media (max-width: 479px) {
        display: grid;
        gap: 2rem;
    }
`

const ContentStep = styled.aside`
    width: 40%;
    display: grid;
    gap: 1.8rem !important;
    justify-content: space-between;

    @media (max-width: 479px) {
        gap: 1rem !important;
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 884px) {
        width: 50%;
    }

    & span {
        font-family: "Playfair Display", serif;
        font-size: 1.7rem;
        width: 4.5rem;
        height: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #936e3a;
        padding-bottom: 0.5rem;
        border-radius: 50%;

        @media (max-width: 479px) {
            justify-self: center;
        }
    }

    & section {
        display: grid;
        gap: 1.5rem;

        @media (max-width: 479px) {
            gap: 1rem;
        }

        & h2 {
            text-align: center;
            font-size: 2.5rem;

            @media (min-width: 885px) and (max-width: 1439px) {
                font-size: 2rem;
            }

            @media (min-width: 481px) and (max-width: 884px) {
                font-size: 2.1rem;
            }

            @media (max-width: 479px) {
                font-size: 1.8rem;
            }
        }

        & p {
            font-size: 1.3rem;

            @media (min-width: 885px) and (max-width: 1439px) {
                font-size: 1.4rem;
            }

            @media (min-width: 481px) and (max-width: 884px) {
                font-size: 1.3rem;
            }

            @media (max-width: 479px) {
                text-align: center;
                font-size: 1rem;
            }
        }
    }
`

const ImageStep = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 479px) {
        width: 100%;
    }

    & div {
        position: absolute;
        width: 35.7rem;
        height: 21rem;
        border-radius: 999rem 999rem 0px 0px;

        @media (min-width: 481px) and (max-width: 884px) {
            width: 100%;
            height: 14rem;
        }

        @media (max-width: 479px) {
            width: 100%;
            height: 12.5rem;
        }
    }

    & div:first-child {
        background-color: #fbf2e7;
        top: 12%;
        left: 8%;

        @media (min-width: 481px) and (max-width: 884px) {
            top: 4%;
            left: 7%;

            display: none;
        }

        @media (max-width: 479px) {
            left: 2%;
        }
    }

    & div:last-child {
        left: 3%;
        overflow: hidden;

        & img {
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: bottom center;

            @media (max-width: 479px) {
                width: 100%;
                height: 12rem;
                object-position: top center;
            }
        }

        @media (max-width: 479px) {
            left: 0;
        }
    }
`

type StepProps = {
    stepNumber: number
    stepTitle: string
    stepDescription: string
    stepImage: string
    imageDirection: string
}

export default function Step({
    stepNumber,
    stepTitle,
    stepDescription,
    stepImage,
    imageDirection,
}: StepProps) {
    return (
        <StepStyled direction={imageDirection}>
            <ContentStep>
                <span>0{stepNumber}</span>
                <section>
                    <h2>{stepTitle}</h2>
                    <p>{stepDescription}</p>
                </section>
            </ContentStep>

            <ImageStep>
                <div></div>
                <div>
                    <img src={stepImage} alt={stepTitle} loading="lazy" />
                </div>
            </ImageStep>
        </StepStyled>
    )
}
