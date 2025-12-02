import React, { useState, useEffect } from "react";

export default function App() {
  const cards = [
    { image: "/icon/Diabetes.svg", title: "Qantli diabet" },
    { image: "/icon/Diabetess.svg", title: "Yurakdagi muammolar" },
    { image: "/icon/Gynecological.svg", title: "Teri kasalliklari" },
    { image: "/icon/Headache.svg", title: "Ginekologik muammolar" },
    { image: "/icon/Heart.svg", title: "Bosh og’rig’i" },
    { image: "/icon/Hormonal.svg", title: "Qantli diabet" },
    { image: "/icon/Lung.svg", title: "O’pka kasalligi" },
    { image: "/icon/Skin.svg", title: "Gormonal kasalliklar" },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <Carousel cards={cards} />
    </div>
  );
}

function Carousel({ cards }) {
  const CARD_WIDTH = 152;
  const VISIBLE = 8;
  const STEP = CARD_WIDTH;

  const extended = [
    ...cards.slice(-VISIBLE),
    ...cards,
    ...cards.slice(0, VISIBLE),
  ];

  const [index, setIndex] = useState(VISIBLE);
  const [transition, setTransition] = useState(true);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  useEffect(() => {
    if (index >= cards.length + VISIBLE) {
      setTimeout(() => {
        setTransition(false);
        setIndex(index - cards.length);
      }, 300);
    }

    if (index < VISIBLE) {
      setTimeout(() => {
        setTransition(false);
        setIndex(index + cards.length);
      }, 300);
    }

    const t = setTimeout(() => setTransition(true), 50);
    return () => clearTimeout(t);
  }, [index, cards.length]);

  return (
    <div className="relative" style={{ width: VISIBLE * CARD_WIDTH }}>
      <div className="overflow-hidden">
        <div className={`${transition ? "transition-transform duration-300 ease-out" : ""} flex`} style={{ transform: `translateX(-${index * STEP}px)`, width: extended.length * CARD_WIDTH }}>
          {extended.map((card, i) => (
            <div key={i} className="p-2 flex-shrink-0 w-[152px]">
              <div className="bg-white h-[188px] rounded-xl shadow-md flex flex-col items-center justify-start hover:scale-[1.03] transition py-[32px]">
                <img src={card.image} className="w-16 h-16 object-contain" />
                <p className=" text-center text-[16px] font-mont font-medium">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-[#FCE3E8] shadow w-[40px] h-[40px] rounded-full hover:border hover:border-[#E90D33]" >
    <i className="bi bi-chevron-left text-[#E90D33]"></i>
      </button>

      <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#FCE3E8] shadow w-[40px] h-[40px] rounded-full hover:border hover:border-[#E90D33]" >
       <i class="bi bi-chevron-right text-[#E90D33]"></i>
      </button>
    </div>
  );
}
