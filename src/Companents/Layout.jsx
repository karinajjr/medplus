import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import Footer from "./Footer"


function Layout() {
    const { t } = useTranslation();

    return (
        <>
            <Nav />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout