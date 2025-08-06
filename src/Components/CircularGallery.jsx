import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
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

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
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

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div className="stack-wrapper">
         <h2 className="gallery-title" style={{ fontFamily: 'Poppins' }}>
        Have a glimpse of
      </h2>
      <h1 className="gallery-subtitle" style={{ fontFamily: 'Transcend', color: '#FFD700' }}>
        OUR WORK!
      </h1>

      <div className="stack-container">
        {cards.map((card, index) => {
          const randomRotate = randomRotation
            ? Math.random() * 10 - 5 // Random degree between -5 and 5
            : 0;

          return (
            <CardRotate
              key={card.id}
              onSendToBack={() => sendToBack(card.id)}
              sensitivity={sensitivity}
            >
              <motion.div
                className="card"
                onClick={() => sendToBackOnClick && sendToBack(card.id)}
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                }}
                whileHover={{ 
                  scale: 1.02 + index * 0.06 - cards.length * 0.06,
                  transition: { duration: 0.2 }
                }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="card-image"
                />
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
      
      {/* <button className="explore-gallery-button" onClick={() => console.log('Explore gallery clicked')}>
        Explore Gallery
        <span className="arrow">→</span>
      </button> */}
    </div>
  );
}