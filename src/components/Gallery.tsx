import styled from "styled-components"

const GalleyStyled = styled.div`
    background-color: #fffaf5;
    height: 50rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 3px;

    @media (min-width: 481px) and (max-width: 884px) {
        height: 35rem;
    }

    @media (max-width: 479px) {
        height: 15rem;
        gap: 2px;
    }

    & div {
        background-color: gray;
    }

    & div:first-child {
        grid-row: span 5 / span 5;

        background: url("/assets/gallery/g-1.webp") center center;
        background-size: cover;
    }

    & div:nth-child(2) {
        grid-row: span 2 / span 2;
        grid-column-start: 2;
        grid-row-start: 4;

        background: url("/assets/gallery/g-2.webp") center center;
        background-size: cover;
    }

    & div:nth-child(3) {
        grid-row: span 3 / span 3;
        grid-column-start: 2;
        grid-row-start: 1;

        background: url("/assets/gallery/g-3.webp") center center;
        background-size: cover;
    }

    & div:nth-child(4) {
        grid-row: span 5 / span 5;
        grid-column-start: 3;
        grid-row-start: 1;

        background: url("/assets/gallery/g-4.webp") center center;
        background-size: cover;
    }

    & div:nth-child(5) {
        grid-row: span 3 / span 3;
        grid-column-start: 4;
        grid-row-start: 3;

        background: url("/assets/gallery/g-6.webp") center center;
        background-size: cover;
    }

    & div:nth-child(6) {
        grid-row: span 2 / span 2;
        grid-column-start: 4;
        grid-row-start: 1;

        background: url("/assets/gallery/g-7.webp") top center;
        background-size: cover;
    }

    & div:last-child {
        grid-row: span 5 / span 5;
        grid-column-start: 5;
        grid-row-start: 1;

        background: url("/assets/gallery/g-5.webp") center center;
        background-size: cover;
    }

    @media (min-width: 885px) and (max-width: 1439px) {
        height: 36rem;
    }
`

export default function Gallery() {
    return (
        <GalleyStyled className="parent" id="contact">
            <div className="div1"></div>
            <div className="div2"></div>
            <div className="div4"></div>
            <div className="div6"></div>
            <div className="div7"></div>
            <div className="div8"></div>
            <div className="div9"></div>
        </GalleyStyled>
    )
}
