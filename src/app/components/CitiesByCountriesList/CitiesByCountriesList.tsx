"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import { formatHotelQuantity } from "@/app/helpers/formatHotelQuantity";
import { City } from "@/app/types/city";
import Arrow from "@/app/ui/svgElements/Arrow";

import "keen-slider/keen-slider.min.css";
import css from "./CitiesByCountriesList.module.css";
import { LinkToAllAds } from "@/app/ui/LinkToAllAds/link-to-all-ads.component";

interface Props {
  cities: City[];
}

export default function CitiesByCountriesList({ cities }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3,
        },
      },
    },
  });

  const handlePrev = () => {
    if (slider) {
      slider.current?.prev();
    }
  };

  const handleNext = () => {
    if (slider) {
      slider.current?.next();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 834);
      setIsDesktop(window.innerWidth > 1440);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <li className={css.hotelsListItem}>
        <h3 className={css.countryName}>{cities[0].countryNameUkr}</h3>
        <LinkToAllAds />
        <div ref={sliderRef} className="keen-slider">
          {cities.map(({ city }, idx) => {
            return (
              <div key={`${city.cityName}-${idx}`}>
                <div
                  className={`
                keen-slider__slide hotels-number-slide1 ${css.slide}`}
                >
                  <Image
                    src={city.photo}
                    alt={city.cityName}
                  />
                  <h4 className={css.cityName}>{city.cityName}</h4>
                  <p className={css.hotelQuantity}>
                    {formatHotelQuantity(city.hotelQuantity)} готелів
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </li>
      {!isMobile && (
        <div className={css.hotelsBtnWrap}>
          <button
            className={css.hotelsBtn}
            onClick={handlePrev}
            aria-label="Button to go to the previous slide"
          >
            <Arrow />
          </button>
          <button
            className={css.hotelsBtn}
            onClick={handleNext}
            aria-label="Button to go to the next slide"
          >
            <Arrow />
          </button>
        </div>
      )}
    </>
  );
}
