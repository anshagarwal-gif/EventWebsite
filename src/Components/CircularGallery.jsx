import { useState, useEffect } from "react";
import "./CircularGallery.css";
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"
import img7 from "../assets/Persona.png"
import img8 from "../assets/Spectra.png"
import img9 from "../assets/VSM.png"

export default function Stack({
  cardsData = []
}) {
  const [cards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: img1},
          { id: 2, img: img2 },
          { id: 3, img: img3},
          { id: 4, img: img4 },
          { id: 5, img: img5},
          { id: 6, img: img6 },
          { id: 7, img: img7 },
          { id: 8, img: img8},
          { id: 9, img: img9 },
        ]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide animation: change slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2500); // Change slide every 2.5 seconds (allowing time for animation)
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="stack-wrapper">
      <h2 className="gallery-title" style={{ fontFamily: 'Poppins' }}>
        Have a glimpse of
      </h2>
      <h1 className="gallery-subtitle" style={{ fontFamily: 'Transcend', color: '#FFD700' }}>
        OUR WORK!
      </h1>

      <div className="work-slider">
        {cards.map((card, index) => (
          <div
            className={`work-item ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
            key={card.id}
          >
            <img
              src={card.img}
              alt={`work-${card.id}`}
              className="work-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}