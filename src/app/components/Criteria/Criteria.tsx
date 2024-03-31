"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import css from "./Criteria.module.css";
import "keen-slider/keen-slider.min.css";
import gstyles from "../../page.module.css";

import housePic from "../../../../public/images/binyaminMellish-375.jpg";
import studioPic from "../../../../public/images/studioImage-375.jpg";
import roomPic from "../../../../public/images/RoomImage-375.jpg";
import apartmentPic from "../../../../public/images/apartmenImage-375.jpg";

export default function Criteria() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className={`${css.section} ${gstyles.container}`}>
      <h2 className={css.title}>Критерії оголошення</h2>
      <>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className={` keen-slider__slide ${css.numberSlide}`}>
              <Image className={css.img} src={housePic} alt="House" />
              <h3 className={css.cardTitle}>Будинки</h3>
            </div>
            <div className={` keen-slider__slide ${css.numberSlide}`}>
              <Image className={css.img} src={studioPic} alt="House" />
              <h3 className={css.cardTitle}>Студії</h3>
            </div>
            <div className={` keen-slider__slide ${css.numberSlide}`}>
              <Image className={css.img} src={roomPic} alt="House" />
              <h3 className={css.cardTitle}>Кімнати</h3>
            </div>
            <div className={` keen-slider__slide ${css.numberSlide}`}>
              <Image className={css.img} src={apartmentPic} alt="House" />
              <h3 className={css.cardTitle}>Квартири</h3>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className={css.dots}>
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              const isActive = currentSlide === idx ? css.active : "";
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`${css.dot} ${isActive}`}
                ></button>
              );
            })}
          </div>
        )}
      </>
    </section>
  );
}
