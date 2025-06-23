import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { useMediaQuery } from "react-responsive"
import HamburgerMenu from "./HamburguerMenu"

export default function Layout() {
    const isMobile = useMediaQuery({ maxWidth: 884 })

    return (
        <>
            {isMobile ? <HamburgerMenu /> : <NavBar />}

            <main>
                <Outlet />
            </main>
        </>
    )
}
