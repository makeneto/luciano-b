import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Loading from "./components/Loading"
import NotFoundPage from "./pages/NotFoundPage"
import Layout from "./components/Layout"

export default function App() {
    const Home = lazy(() => import("./pages/Home"))

    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
