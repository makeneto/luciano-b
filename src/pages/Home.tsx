import BoughtRecently from "../components/BoughtRecently"
import Contact from "../components/Contact"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Steps from "../components/Steps"
import WeBought from "../components/WeBought"
import WhatsappButton from "../components/WhatsappButton"
import WhyChoose from "../components/WhyChoose"

export default function Home() {
    return (
        <>
            <Hero />
            <Steps />
            <WhyChoose />
            <WeBought />
            <BoughtRecently />
            <Gallery />
            <Contact />
            <Faq />

            <Footer />
            <WhatsappButton />
        </>
    )
}
