import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BOT_TOKEN = "8565375529:AAGecSewxKBWrMBUYWwxEukIEuCch7Px5fw";
const CHAT_ID = "-1003257673634";

function Layout() {
    const { t } = useTranslation();

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    //header
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const certificatesRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);

    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [openIndex, setOpenIndex] = useState(null);
    const [open, setOpen] = useState(false);



    const navigate = useNavigate();

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollTo = (ref) => {
        setOpen(false);
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  px-[20px] md:px-0  ${scrolled ? "bg-white backdrop-blur-lg shadow-xl" : "bg-transparent"}`}>

                <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5 px-3 2xl:px-0">
                    <Link to="/">
                        <img src="/logo/Plusmed.svg" alt="logo" className="w-[113px] h-[24px] cursor-pointer" onClick={handleLogoClick} />
                    </Link>
                    <div className="flex  gap-[58px] items-center">
                        <div className="flex md:gap-[40px]  text-[#000D24] items-center hidden lg:flex">
                            {[
                                { label: t("navbar.home"), ref: homeRef },
                                { label: t("navbar.about"), ref: aboutRef },
                                { label: t("navbar.services"), ref: servicesRef },
                                { label: t("navbar.portfolio"), ref: portfolioRef },
                                { label: t("navbar.certificates"), ref: certificatesRef },
                                { label: t("navbar.contact"), ref: contactRef },
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.ref)}
                                    className="relative text-[16px] cursor-pointer px-2 py-1 group font-mont font-semibold "
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-[#EDEDED] rounded-[8px] transition-all duration-400 ease-in-out group-hover:w-[135px] group-hover:h-[40px]"></span>
                                </button>
                            ))}
                        </div>

                        <div className="font-mont font-semibold  text-[16px] flex items-center justify-center gap-[16px]">
                            <button className="w-[100px] h-[40px] rounded-[8px] flex justify-center items-center hover:border-1 hover:border-[#E90D33] hover:text-[#E90D33] transition-all duration-300 ease-in-out">
                                Register
                            </button>
                            <button className="w-[100px] h-[40px] rounded-[8px] bg-[#E90D33] hover:bg-white border border-[#E90D33] flex justify-center items-center text-white hover:text-[#E90D33] transition-all duration-700 ease-in-out">
                                Log in
                            </button>
                        </div>
                        {/* <div className="flex gap-6 items-center">
                            <LanguageSelector />
                            <div className=" lg:hidden flex gap-[30px] justify-center items-center ">
                                <button className="text-white text-[24px]  " onClick={() => setOpen(!open)}>
                                    {open ? "X" : "☰"}
                                </button>
                            </div>
                        </div> */}
                    </div>

                </div>

                {open && (
                    <div className="lg:hidden bg-black/60 backdrop-blur-lg text-white text-[18px] px-4 py-4 space-y-4 rounded-xl mx-2">
                        <button onClick={() => scrollTo(homeRef)} className="block">{t("navbar.home")}</button>
                        <button onClick={() => scrollTo(aboutRef)} className="block">{t("navbar.about")}</button>
                        <button onClick={() => scrollTo(servicesRef)} className="block">{t("navbar.services")}</button>
                        <button onClick={() => scrollTo(portfolioRef)} className="block">{t("navbar.portfolio")}</button>
                        <button onClick={() => scrollTo(certificatesRef)} className="block">{t("navbar.certificates")}</button>
                        <button onClick={() => scrollTo(contactRef)} className="block">{t("navbar.contact")}</button>
                    </div>
                )}
            </nav>

            <main className="flex-grow">
                <Outlet context={{ homeRef, aboutRef, contactRef, certificatesRef, servicesRef, portfolioRef }} />
            </main>



            <footer className="bg-[#CC1837]  text-white">
                <div className="max-w-[1440px] mx-auto flex flex-col py-[70px]  px-[20px] md:px-4 lg:px-3 2xl:px-0 space-y-[22px]">
                    <div className="border border-t border-[#FFFFFF33]"></div>
                    <img src="./logo/plusMedWhite.svg" className="w-[150px] h-[42px]" />
                    <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col space-y-[12px] text-[16px]">
                            <p>Pochta: info@medplus.uz </p>
                            <div>
                                <p>Texnik yordam: </p>
                                <span>+998 99 895 03 03, +998 99 115 04 24 </span>
                            </div>
                            <div>
                                <p>Manzil: </p>
                                <p className="w-[302px]">   O'zbekiston, Toshkent shahri, Yashnobod tumani, Sarbon ko'chasi 1A. Mo'ljal: Mehmonxona GARNET </p>
                            </div>
                            <div>
                                <p>Ish vaqti: </p>
                                <p>Dush-Juma, 09:00-18:00</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-[12px] text-[16px] ">
                            <h2 className="font-mont font-bold text-[20px]">Navigatsiya</h2>
                            <a >Bosh sahifa</a>
                            <a>Kirish</a>
                            <a>Kontaktlar</a>
                            <a className="w-[212px]">Kompaniyani ro'yxatdan o'tkazish</a>
                        </div>
                        <div className="flex flex-col space-y-[12px] text-[16px]">
                            <h2 className="font-mont font-bold text-[20px]">Bemor uchun</h2>
                            <a>Shifokorlar</a>
                            <a>Dorixonalar</a>
                            <a>Klinikalar</a>
                            <a>Dorilar</a>
                            <a>Simptomlar</a>
                            <a>Muolajalar</a>
                            <a>Yangiliklar</a>
                        </div>
                        <div className="flex flex-col space-y-[12px] text-[16px]">
                            <h2 className="font-mont font-bold text-[20px]">Foydalanish qoidalari</h2>
                            <a>Maxfiylik siyosati</a>
                            <a>Shifokor ommaviy ofertasi</a>
                            <a>Bemor ommaviy ofertasi</a>
                            <button className="border-1 border-white w-[189px] h-[60px] rounded-[12px] flex items-center justify-center gap-1">
                                <img src="./icon/playstorered.svg" alt="" />
                                <p className="text-white text-[20px] font-medium">PlayMarket</p>
                            </button>
                            <button className=" border-1 border-white w-[189px] h-[60px] rounded-[12px] flex items-center justify-center gap-1">
                                <img src="./icon/applered.svg" />
                                <p className="text-white text-[20px] font-medium">AppStore</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="w-[613px]">Saytda taqdim etilgan ma'lumotlar bemorga tashxis qo'yish va davolash uchun ishlatilishi
                            mumkin emas va shifokorning o'rnini bosa olmaydi.</p>
                        <div className="flex space-x-[12px] mt-[15px]">
                            <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white">
                                <img src="./icon/youtube.svg" />
                            </button>
                            <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                                <img src="./icon/instagram.png" />
                            </button>
                            <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                                <img src="./icon/linkedin.svg" />
                            </button>
                            <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                                <img src="./icon/telegram.svg" />
                            </button>
                            <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                                <img src="./icon/facebook.svg" />
                            </button>
                            <button className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
                                <img src="./icon/chatbubbles.svg" />
                            </button>
                        </div>
                    </div>
                    <div className="border border-t border-[#FFFFFF33] mt-[30px]"></div>
                    <div className=" flex justify-center items-center ">
                        <p> © 2025 MCHJ «Tenzorsoft». Barcha huquqlar himoyalangan.</p>
                        </div>
                </div>

            </footer>
        </>
    )
}

export default Layout