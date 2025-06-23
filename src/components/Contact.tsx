import styled from "styled-components"
import useContactForm from "../hooks/useContactForm"
import MiniLoader from "./ui/MiniLoader"

const ContactStyled = styled.section`
    background-color: #fffaf5;
    width: 100%;
    margin-bottom: 8rem;

    & form {
        background-color: white;
        width: 46rem;
        margin-inline: auto;
        display: grid;
        gap: 2rem;
        padding: 3.5rem 5rem 2rem;
        border: 1px solid #936e3a;

        @media (min-width: 885px) and (max-width: 1439px) {
            width: 44rem;
            padding: 3.2rem 3rem 0.8rem;
        }

        @media (max-width: 479px) {
            width: 100%;
            padding: 2.5rem 3rem 2rem;
        }

        & h1 {
            font-size: 2rem;

            @media (max-width: 479px) {
                font-size: 1.8rem;
            }
        }

        & section {
            display: grid;
            gap: 1rem;

            & div {
                width: 100%;
                display: flex;
                gap: 0.8rem;

                @media (min-width: 885px) and (max-width: 1439px) {
                    gap: 1.3rem;
                }

                @media (max-width: 479px) {
                    display: grid;
                }
            }

            & h3 {
                font-weight: 600;
                font-size: 1.1rem;
            }
        }

        & label {
            width: 100%;
            display: grid;
            gap: 0.5rem;

            & p > span {
                color: red;
            }

            & input,
            & textarea {
                border: 1px solid #dfd8cd;
                color: #c8bdb0;
                background-color: #fff;
                width: 100%;
                height: auto;
                margin-bottom: 0;
                padding: 12px 16px;
                font-size: 14px;
                line-height: 165%;
                transition: all 0.2s;
                box-shadow: 4px 4px 4px #0b3b460d;
                outline: none;

                &:focus {
                    border-color: #0078ff;
                    outline: none;
                    box-shadow: 0 0 0 2px rgba(0, 120, 255, 0.2);
                    color: #010d26;
                }

                @media (min-width: 885px) and (max-width: 1439px) {
                    padding: 10px 12px;
                }
            }

            & input[type="text"] {
                text-transform: capitalize;
            }

            & textarea {
                min-width: 100%;
                height: 6rem;
                resize: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */
            }
        }

        & button {
            position: relative;
            margin: 2rem 0 2rem 0.4rem;

            & div {
                width: 100%;
                height: 3.5rem;
                background-color: #f2e2c4;
                transition: all 0.1s ease-in;

                @media (min-width: 885px) and (max-width: 1439px) {
                    height: 3rem;
                }
            }

            & span {
                width: 100%;
                height: 100%;
                background-color: #010d26;
                color: #fffaf5;
                position: absolute;
                top: -0.3rem;
                left: -0.3rem;
                font-size: 1rem;
                text-transform: uppercase;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            &:hover {
                & div {
                    background-color: #936e3a;
                }
            }
        }
    }
`

const ErrorMessage = styled.small<{ visible: boolean }>`
    color: red;
    font-size: 0.75rem;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    transition: opacity 0.3s ease;
    height: 1em;
`

export default function Contact() {
    const { register, handleSubmit, onSubmit, setValue, errors, name, state } =
        useContactForm()

    return (
        <ContactStyled>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1>Preencha para vender seu ouro</h1>

                <section>
                    <h3>Dados pessoais</h3>

                    <div>
                        <label htmlFor="name">
                            <p>
                                Nome completo <span>*</span>
                            </p>
                            <input
                                type="text"
                                id="name"
                                {...register("name", {
                                    required: "Nome é obrigatório",
                                    pattern: {
                                        value: /^[A-Za-zÀ-ÿ\s]+$/,
                                        message:
                                            "O nome não pode conter números ou caracteres especiais",
                                    },
                                })}
                                value={name || ""}
                                onChange={(e) =>
                                    setValue("name", e.target.value)
                                }
                            />
                            <ErrorMessage visible={!!errors.name}>
                                {errors.name?.message}
                            </ErrorMessage>
                        </label>

                        <label htmlFor="email">
                            <p>
                                Seu email <span>*</span>
                            </p>
                            <input
                                id="email"
                                type="email"
                                {...register("email", {
                                    required: "Email é obrigatório",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Email inválido",
                                    },
                                })}
                            />
                            <ErrorMessage visible={!!errors.email}>
                                {errors.email?.message}
                            </ErrorMessage>
                        </label>
                    </div>
                </section>

                <section>
                    <h3>Informações para contacto</h3>

                    <div>
                        <label htmlFor="location">
                            <p>
                                Sua localização <span>*</span>
                            </p>
                            <input
                                type="text"
                                id="location"
                                {...register("location", {
                                    required: "Localização é obrigatória",
                                })}
                            />
                            <ErrorMessage visible={!!errors.location}>
                                {errors.location?.message}
                            </ErrorMessage>
                        </label>

                        <label htmlFor="phone">
                            <p>
                                Seu número de telefone <span>*</span>
                            </p>
                            <input
                                type="tel"
                                id="phone"
                                {...register("phone", {
                                    required: "Telefone é obrigatório",
                                    pattern: {
                                        value: /^(\d{3} ?){2,5}\d{0,3}$/,
                                        message: "Número inválido",
                                    },
                                    onChange: (e) => {
                                        const onlyDigits =
                                            e.target.value.replace(/\D/g, "")
                                        const formatted =
                                            onlyDigits
                                                .match(/.{1,3}/g)
                                                ?.join(" ")
                                                .substring(0, 11) || ""
                                        e.target.value = formatted
                                    },
                                })}
                            />
                            <ErrorMessage visible={!!errors.phone}>
                                {errors.phone?.message}
                            </ErrorMessage>
                        </label>
                    </div>

                    <label htmlFor="summary" className="moreMargin">
                        <p>
                            Assunto <span>*</span>
                        </p>
                        <textarea
                            id="summary"
                            {...register("summary", {
                                required: "Assunto é obrigatório",
                            })}
                        />
                        <ErrorMessage visible={!!errors.summary}>
                            {errors.summary?.message}
                        </ErrorMessage>
                    </label>

                    <button type="submit" disabled={state.submitting}>
                        <div></div>
                        {state.submitting ? (
                            <MiniLoader />
                        ) : (
                            <span>Enviar mensagem</span>
                        )}
                    </button>
                </section>
            </form>
        </ContactStyled>
    )
}
