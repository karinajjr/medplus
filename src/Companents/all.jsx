import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Partners from "./partners";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";



function all() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [openId, setOpenId] = useState(null);

    const { homeRef, aboutRef, certificatesRef, servicesRef, portfolioRef } = useOutletContext();

    const users = [
        { id: 1, image: "/icon/doktors.svg", profession: "Ginekolog", explanation: "Ayolning salomatligini nazorat qiluvchi mutaxassis" },
        { id: 2, image: "/icon/doktors.svg", profession: "ENT (Otorinolaringologiya)", explanation: "Otorinolaringologlar bilan maslahatlashish va davolash." },
        { id: 3, image: "/icon/doktors.svg", profession: "Allergolog", explanation: "Allergolog - allergik kasalliklarni aniqlash va davolashga ixtisoslashgan shifokor. " },
        { id: 4, image: "/icon/doktors.svg", profession: "Gastroenterolog", explanation: "Yurak mutaxassisi " },
        { id: 5, image: "/icon/doktors.svg", profession: "Pediatr", explanation: "Bolalar bilan ishlash va ularni himoya qilish mutaxassisi " },
        { id: 6, image: "/icon/doktors.svg", profession: "Endokrinolog", explanation: "Gormonal kasalliklar mutaxassisi " },
        { id: 7, image: "/icon/doktors.svg", profession: "Nevrolog", explanation: "Bolalar bilan ishlash va ularni himoya qilish mutaxassisi " },
        { id: 8, image: "/icon/doktors.svg", profession: "Terapevt", explanation: "Harakat tizimi nuqsonlari bilan shug'ullanish mutaxassisi " },
        { id: 9, image: "/icon/doktors.svg", profession: "Urolog", explanation: "Genitourinar mutaxassisi " },
        { id: 10, image: "/icon/doktors.svg", profession: "Dermatovenerolog", explanation: "Terining kasalliklarini davolash mutaxassisi " },
        { id: 11, image: "/icon/doktors.svg", profession: "Psixolog", explanation: "Ruhiy salomatlik mutaxassisi " },
        { id: 12, image: "/icon/see.svg", profession: "Barcha mutaxasislar", mere: "bi bi-chevron-right" },
    ];


    return (
        <div>

            <header className=" text-[#000D24]">
                <section id="hero" ref={homeRef} className="relative flex items-center text-white h-screen pt-[100px] px-[20px] md:px-2 lg:px-3 2xl:px-0" >
                    <div className="relative max-w-[1440px] w-full mx-auto">
                        <img src="/baground/heroRight.svg" className="absolute -left-[280px] -top-[170px] h-[848px] hidden md:block" />

                        <img src="/baground/heroleft.jpg" className="absolute -right-[232px]  -top-[150px] w-[793px] h-[588px] hidden md:block" />

                        <div className="space-y-[170px] relative z-10">
                            <div className="space-y-[20px]">
                                <h1 className="text-5xl md:text-[64px] text-[#E90D33] font-mont font-bold w-[717px]"> {t("hero.title")} </h1>
                                <p className="text-[20px] md:text-[16px] text-[#000D24] font-mont font-medium w-[640px]"> {t("hero.description")} </p>
                                <button className="hover:border-2 hover:border-[#E90D33] hover:bg-white hover:text-[#E90D33]  bg-[#E90D33] text-white w-[360px] h-[60px] rounded-full text-[18px] font-mont font-semibold mt-[20px]"> {t("hero.cta")}</button>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center  gap-[100px]">
                                    <div className="flex flex-col justify-center items-center">
                                        <span className=" text-[#E90D33] text-[32px] font-mont font-semibold ">400+</span>
                                        <p className="text-[#000D24] text-[16px] font-mont font-medium ">Shifokorlar</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <span className=" text-[#E90D33] text-[32px] font-mont font-semibold">100 000+</span>
                                        <p className="text-[#000D24] text-[16px] font-mont font-medium">Foydalanuvchilar</p>
                                    </div>
                                </div>
                                <div className="flex gap-[20px]">
                                    <button className="border-1 border-[#000D24] w-[189px] h-[60px] rounded-[12px] flex items-center justify-center gap-1">
                                        <img src="./icon/playstore.svg" alt="" />
                                        <p className="text-[#000D24] text-[20px] font-medium">PlayMarket</p>
                                    </button>
                                    <button className=" border-1 border-[#000D24] w-[171px] h-[60px] rounded-[12px] flex items-center justify-center gap-1">
                                        <img src="./icon/apple.svg" />
                                        <p className="text-[#000D24] text-[20px] font-medium">AppStore</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <main className=" ">
                <section ref={servicesRef} id="Services" className=" relative pt-[1050px]">
                    <div className=" absolute inset-0 bg-[url('./baground/Ellipse.svg')] h-[792px] bg-no-repeat bg-center flex flex-col space-y-[80px]">
                        <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[46px] my-[30px] ">
                            <div className=" items-center justify-center flex flex-col text-center">
                                <p className="font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">{t("servicesSection.badge")} </p>
                            </div>
                            <Carousel />
                        </div>

                        <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[46px] my-[30px] ">
                            <div className=" items-center justify-center flex flex-col text-center">
                                <p className="font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">Mutaxasisni Tanlang</p>
                            </div>

                            <div className=" text-[#000D24]">
                                <div className="grid grid-cols-3 gap-[20px]">
                                    {users.map((user) => (
                                        <button key={user.id} className="bg-white border border-[#000D241A] w-[440px] h-[100px] rounded-[16px] flex items-center gap-[16px] p-2 ">
                                            <img src={user.image} />
                                            <div className=" flex flex-col text-start items-start justify-start">
                                                <h2 className="text-[16px] font-mont font-semibold">  {user.profession}</h2>
                                                <p className="text-[14px] font-mont font-medium "> {user.explanation}</p>
                                            </div>
                                            {user.id === 12 && (
                                                <i className={`${user.mere} bg-[#FCE3E8] text-[#E90D33] p-1 ml-[146px]`} ></i>
                                            )}

                                        </button>
                                    ))}
                                </div>
                            </div>




                        </div>
                    </div>

                </section>

                <section className="">
                    <div className=" max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[46px] my-[30px] ">
                        <div className=" items-center justify-center flex flex-col text-center">
                            <p className="font-semibold text-[28px] md:text-4xl">Onlayn maslahat xizmatidan foydalanish usullari </p>
                        </div>

                    </div>
                </section>

            </main>

        </div>
    );
}

export default all;



{/* <section ref={aboutRef} id="AboutUs" className=" bg-gradient-to-b from-[#0348A408] to-white flex">
                    <div className="max-w-[1440px]  mx-auto space-y-[40px] md:space-y-[120px] my-[80px] px-[20px] md:px-2 lg:px-3 2xl:px-0">
                        <div className="space-y-4 items-center justify-center flex flex-col text-center">
                            <button className="rounded-full text-[#0349A7] font-medium bg-[#E8F2FF] flex gap-3 w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                                <img src="/logo/aboutUs.png" className="w-[24px]" />
                                <h1 className="text-2xl"> {t("aboutSection.badge")}</h1>
                            </button>

                            <h2 className=" font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px] ">{t("aboutSection.title")}</h2>
                            <p className="text-xl w-[335px] md:w-[600px] lg:w-[800px]">{t("aboutSection.subtitle")}</p>
                            <Link to="/aboutus" className="rounded-[12px] bg-[#006DFF] hover:bg-white hover:border-2 hover:border-[#5492E4] hover:text-[#5492E4] text-white flex gap-3 w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                                {t("portfolioSection.cta")}
                            </Link>
                        </div>

                        <div className="flex flex-col xl:flex-row items-center justify-center gap-[49px]">

                            <img src="/image/AboutUs.png" className="h-[335px] md:h-[687px] w-[335px] md:w-[680px] lg:w-[600px] 2xl:w-[690px] rounded-2xl " />

                            <div className="space-y-[20px]">

                                <div className="space-y-[12px]">
                                    <h1 className="font-medium text-center text-4xl">
                                        {t("aboutSection.whyTitle")}
                                    </h1>

                                    <p className="text-lg text-center w-[335px] sm:w-[360px] md:w-[580px] 2xl:w-[693px]"> {t("aboutSection.whyDescription")}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] lg:gap-[50px] justify-items-center md:justify-items-start">

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="bg-[#FBBF0A] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]  w-[260px]">
                                            <h1 className="font-medium text-xl">
                                                {t("aboutSection.features.0.title")}
                                            </h1>
                                            <p className="text-lg">
                                                {t("aboutSection.features.0.body")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                                        <div className="bg-[#3BCEAC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services4.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">
                                                <Trans i18nKey="aboutSection.features.1.title">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </h1>
                                            <p className="text-lg">
                                                <Trans i18nKey="aboutSection.features.1.body">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                                        <div className="bg-[#43A7FC] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services2.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">
                                                <Trans i18nKey="aboutSection.features.2.title">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </h1>
                                            <p className="text-lg">
                                                <Trans i18nKey="aboutSection.features.2.body">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[271px]">
                                        <div className="bg-[#D1345B] w-[70px] h-[70px] flex items-center justify-center rounded-full">
                                            <img src="/logo/services3.png" className="w-[32px] h-[27px]" />
                                        </div>
                                        <div className="space-y-[8px]">
                                            <h1 className="font-medium text-xl">
                                                <Trans i18nKey="aboutSection.features.3.title">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </h1>
                                            <p className="text-lg">
                                                <Trans i18nKey="aboutSection.features.3.body">
                                                    <br className="hidden md:block" />
                                                </Trans>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}