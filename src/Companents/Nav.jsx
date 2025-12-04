import { useTranslation } from "react-i18next";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./additional/LanguageSelector"

function Nav() {
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
    <div>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  px-[20px] md:px-0  ${scrolled ? "bg-white backdrop-blur-lg shadow-xl" : "bg-transparent"}`}>

        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5 px-3 2xl:px-0 ">
          <Link to="/">
            <img src="/logo/Plusmed.svg" alt="logo" className="w-[113px] h-[24px] cursor-pointer" onClick={handleLogoClick} />
          </Link>
          <div className="flex  gap-[58px] items-center">
            {/* <div className="flex md:gap-[40px] text-[#000D24] items-center hidden lg:flex">
              {[
                { label: t("navbar.home"), ref: homeRef },
                { label: t("navbar.doktor"), to: "/catalog" },
                { label: t("navbar.pharmacy"), ref: pharmacyRef },
                { label: t("navbar.clinic"), ref: clinicRef },
                { label: t("navbar.medicines"), },
                { label: t("navbar.new"), ref: newRef },
              ].map((item, index) =>
                item.to ? (
                  <Link
                    key={index}
                    to={item.to}
                    className="relative text-[16px] cursor-pointer px-2 py-1 group font-mont font-semibold"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-[#EDEDED] rounded-[8px] transition-all duration-400 ease-in-out group-hover:w-[135px] group-hover:h-[40px]"></span>
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.ref)}
                    className="relative text-[16px] cursor-pointer px-2 py-1 group font-mont font-semibold"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-[#EDEDED] rounded-[8px] transition-all duration-400 ease-in-out group-hover:w-[135px] group-hover:h-[40px]"></span>
                  </button>
                )
              )}
            </div> */}


            <div className="flex gap-6 items-center">
              <LanguageSelector />
              <div className=" lg:hidden flex gap-[30px] justify-center items-center ">
                <button className="text-white text-[24px]  " onClick={() => setOpen(!open)}>
                  {open ? "X" : "☰"}
                </button>
              </div>
            </div>

            <div className="font-mont font-semibold  text-[16px] flex items-center justify-center gap-[16px]">
              <button className="w-[130px] h-[40px] rounded-[8px] flex justify-center items-center hover:border-1 hover:border-[#E90D33] hover:text-[#E90D33] transition-all duration-300 ease-in-out">
                {t("navbar.registration")}
              </button>
              <button className="w-[100px] h-[40px] rounded-[8px] bg-[#E90D33] hover:bg-white border border-[#E90D33] flex justify-center items-center text-white hover:text-[#E90D33] transition-all duration-700 ease-in-out">
                {t("navbar.singin")}
              </button>
            </div>

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
    </div>
  )
}

export default Nav