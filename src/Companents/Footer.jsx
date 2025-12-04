import React from 'react'

function Footer() {
    return (
        <div>
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
        </div>
    )
}

export default Footer