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
            // если уже на главной — скроллим вверх
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        // если НЕ на главной — переход произойдет через Link
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
    // footer
    const faqs = [
        {
            question: t("faq.item1.question"),
            answers: [
                { text: t("faq.item1.home"), ref: homeRef },
                { text: t("faq.item1.about"), ref: aboutRef },
                { text: t("faq.item1.services"), link: "/dashboard" },
                { text: t("faq.item1.portfolio"), link: "/dashboard" },
                { text: t("faq.item1.certificates"), ref: certificatesRef },
                { text: t("faq.item1.contact"), ref: contactRef },
            ]
        },
        {
            question: t("faq.item2.question"),
            answers: [
                { text: t("faq.item2.software"), link: "/home" },
                { text: t("faq.item2.1cProduction"), link: "/register" },
                { text: t("faq.item2.bitrix"), link: "/dashboard" },
                { text: t("faq.item2.antivirus"), link: "/dashboard" },
                { text: t("faq.item2.automation"), link: "/dashboard" },
                { text: t("faq.item2.biometric"), link: "/dashboard" },
                { text: t("faq.item2.itservices"), link: "/dashboard" },
            ]
        },
        {
            question: t("faq.item3.question"),
            answers: [
                { text: t("faq.item3.address") },
                { text: t("faq.item3.phone") },
                { text: t("faq.item3.email") },
            ]
        }
    ];

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
                <div className="max-w-[1440px] mx-auto flex flex-col py-[70px] space-y-[80px]  px-[20px] md:px-4 lg:px-3 2xl:px-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between md:items-start gap-3 space-y-6">
                        <div className="flex flex-col space-y-[19px]">
                            <img src="/logo/Plusmed.svg" className="w-[94px] h-[60px]" />
                            <p className="text-xl md:w-[270px] lg:w-[290px] xl:w-[341px]">{t("footer.tagline")}</p>
                            {/* cылки на сот сети */}
                            <div className="flex gap-[17px]">

                                <a href="https://www.youtube.com/@TENZORSOFT-ITCOMPANY" target="_blank" rel="noopener noreferrer" >
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/Facebook.png" className="w-[10px]" />
                                    </button>
                                </a>

                                <a href="https://www.instagram.com/tenzor_soft/" target="_blank" rel="noopener noreferrer" >
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/instagram.png" className="w-[22px]" />
                                    </button>
                                </a>

                                <a href="https://t.me/tenzor_soft" target="_blank" rel="noopener noreferrer" >
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/telegram.png" className="w-[22px]" />
                                    </button>
                                </a>

                                <a href="https://www.linkedin.com/in/tenzor-soft-396297329/" target="_blank" rel="noopener noreferrer">
                                    <button className="w-[44px] h-[44px] bg-white rounded-[12px] flex items-center justify-center hover:border-2 hover:border-[#0349A7]">
                                        <img src="/logo/linkedin.png" className="w-[22px]" />
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col space-y-[16px] text-[#8D8D8D] ">
                            <h1 className="text-xl font-semibold text-white">
                                {t("footer.columns.template.title")}
                            </h1>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(homeRef)}>
                                {t("footer.columns.template.home")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(aboutRef)} >
                                {t("footer.columns.template.about")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(servicesRef)} >
                                {t("footer.columns.template.services")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(portfolioRef)} >
                                {t("footer.columns.template.portfolio")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(certificatesRef)} >
                                {t("footer.columns.template.certificates")}
                            </a>
                            <a className="hover:text-white cursor-pointer" onClick={() => scrollToSection(contactRef)} >
                                {t("footer.columns.template.contact")}
                            </a>
                        </div>

                        <div className="hidden lg:flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">{t("footer.columns.services.title")}</h1>
                            <a href="" className="hover:text-white">{t("footer.columns.services.software")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.1cProduction")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.bitrix")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.antivirus")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.automation")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.biometric")}</a>
                            <a href="" className="hover:text-white">{t("footer.columns.services.itservices")}</a>
                        </div>

                        <div className="hidden lg:flex flex-col space-y-[16px] text-[#8D8D8D]">
                            <h1 className="text-xl font-semibold text-white">
                                {t("footer.columns.contact.title")}
                            </h1>
                            <p className="hover:text-white">Tashkent city Mirabad <br /> district st. Magtymguly</p>
                            <span className="hover:text-white">+998 95 460 10 10</span>
                            <p className="hover:text-white">info@tenzorsoft.com</p>
                        </div>

                        <div className="space-y-3">
                            {/* фак */}
                            <div className="block lg:hidden w-full">
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 shadow-sm">
                                            <button className="text-left px-1 py-3 flex justify-between items-center w-full  md:w-[420px]" onClick={() => toggleIndex(index)} >
                                                <span className="font-medium">{faq.question}</span>
                                                <span className="text-xl">
                                                    {openIndex === index
                                                        ? <i className="bi bi-chevron-up"></i>
                                                        : <i className="bi bi-chevron-down"></i>}
                                                </span>
                                            </button>

                                            {openIndex === index && (
                                                <div className="px-4 pb-4 pt-2 space-y-2">
                                                    {faq.answers.map((ans, i) => (
                                                        <button key={i} onClick={() => {
                                                            navigate(ans?.link || "/");
                                                            ans.ref?.current?.scrollIntoView({ behavior: "smooth" });
                                                        }} className="flex flex-col text-white py-2 text-start">
                                                            {ans.text}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* сабскрай */}
                            <div className="flex flex-col space-y-[16px] text-[#8D8D8D]">
                                <h1 className="text-xl font-semibold text-white">
                                    {t("footer.subscribeHeading")}
                                </h1>
                                <input type="text" id="name" placeholder={t("footer.subscribePlaceholder")} className="md:w-[420px] lg:w-[200px] xl:w-[320px] h-[48px] px-4 py-2 border border-[#8D8D8D] rounded-lg" />
                                <button className="md:w-[420px] lg:w-[200px] xl:w-[320px] h-[52px] hover:bg-white hover:text-[#006DFF] bg-[#006DFF] hover:border-2 hover:border-[#006DFF] rounded-[12px] font-medium text-white text-lg">
                                    {t("footer.subscribeCta")}
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="space-y-3 md:space-y-[40px] text-[#8D8D8D]">
                        <hr className="border-t border-[#8D8D8D80]" />
                        <div className="flex flex-col justify-between md:flex-row space-y-4 md:space-y-0 text-center">
                            <p className="">{t("footer.rights")}</p>

                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Layout