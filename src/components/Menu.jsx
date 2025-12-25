"use client";

import { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = sliderLists.length;

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  const goToNext = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailsAt = (indexOffset) => {
    return sliderLists[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailsAt(0);
  const previousCocktail = getCocktailsAt(-1);
  const nextCocktail = getCocktailsAt(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="src-only">
        Cocktails Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cock, i) => {
          const isActive = i === currentIndex;

          return (
            <button
              key={cock.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
            >
              {cock.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left "
            onClick={() => goToNext(currentIndex - 1)}
          >
            <span>{previousCocktail?.name}</span>
            <img src="/images/right-arrow.png" alt="left arrow" />
          </button>
          <button
            className="text-left "
            onClick={() => goToNext(currentIndex + 1)}
          >
            <span>{nextCocktail?.name}</span>
            <img src="/images/left-arrow.png" alt="right arrow" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt={currentCocktail.name}
            className="object-contain"
          />
        </div>
      </div>
      <div className="recipe">
        <div ref={contentRef} className="info">
          <p>Recipe for :</p>
          <p className="title">{currentCocktail?.name}</p>
        </div>
        <div className="details">
          <h2>{currentCocktail.title}</h2>
          <p>{currentCocktail.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
