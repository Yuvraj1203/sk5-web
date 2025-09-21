"use client";
import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Images } from "@/public";
import CustomImage from "@/components/common/CustomImage/CustomImage";

const reviewData = [
  { img: Images.review1 },
  { img: Images.review2 },
  { img: Images.review3 },
];
const ReviewSlick = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice(); // initial check
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const [settings, setSettings] = useState({});
  useEffect(() => {
    if (isMobile) {
      setSettings({
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (current: number, next: number) => setSlideIndex(next),
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else {
      setSettings({
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (current: number, next: number) => setSlideIndex(next),
        slidesToShow: 3,
        slidesToScroll: 1,
      });
    }
  }, [isMobile]);

  return (
    <>
      <Slider ref={sliderRef} {...settings} className="mt-20 md:mt-32">
        {reviewData.map((item, index) => {
          return (
            <div
              className={`
               flex items-center justify-center `}
            >
              <CustomImage
                key={index}
                src={item.img}
                width={340}
                height={120}
                alt="author image"
                containerStyle={"justify-self-center"}
                className=""
              />
            </div>
          );
        })}
      </Slider>
      {isMobile && (
        <div className="flex items-center justify-center gap-4 pt-11">
          <button
            onClick={previous}
            className="custom-prev flex items-center justify-center size-12 rounded-full bg-background shadow-faq-out-shadow cursor-pointer"
          >
            <IoChevronBackOutline
              className="font-bold text-primary"
              size={20}
            />
          </button>
          <button
            onClick={next}
            className="custom-next flex items-center justify-center size-12 rounded-full bg-background shadow-faq-out-shadow cursor-pointer"
          >
            <IoChevronForwardOutline
              className="font-bold text-primary"
              size={20}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ReviewSlick;
