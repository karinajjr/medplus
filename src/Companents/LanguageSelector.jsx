import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "uz", label: "UZ", flag: "/logo/uz.png" },
        { code: "ru", label: "RU", flag: "/logo/ru.png" },
        { code: "en", label: "EN", flag: "/logo/en.png" },
    ];

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    const selectLang = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button onClick={() => setOpen(!open)} className="bg-white text-black rounded-[8px] w-[65px] h-[29px] text-[18px] p-2 flex gap-2 items-center" >
                <img src={currentLang.flag} alt={currentLang.label} className="w-6 h-4" />
                {currentLang.label}
            </button>


            {/* Меню */}
            {open && (
                <div className="absolute bg-white border rounded-md shadow-md mt-2 w-[60px]">
                    {languages.map(lang => (
                        <button key={lang.code} onClick={() => selectLang(lang.code)} className="block  w-full px-2 hover:bg-gray-100 hover:rounded-[8px] flex gap-2 text-center items-center" >
                            <img src={lang.flag} alt={lang.label} className="w-6 h-4" />
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
