"use client";
import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustomImage from "../CustomImage/CustomImage";
import { FaQuoteRight } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const testimonialData = [
  {
    id: 1,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "SK5 helped us align our marketing goals with our sales team. Their strategic approach brought in quality leads that converted. We saw a 40% increase in ROI within 3 months.",
    author: "Samantha Lee",
    designation: "CMO, Horizon Software",
  },
  {
    id: 2,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "Their SEO and content strategy transformed our web traffic. We're now ranking on the first page for our top keywords and leads are more engaged than ever thanks to SK5.",
    author: "David Kim",
    designation: "Founder, Revamp Studios",
  },
  {
    id: 3,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "We struggled with brand messaging until SK5 stepped in. Their team crafted a compelling narrative that truly resonates with our audience.",
    author: "Rachel Alvarez",
    designation: "Marketing Director, NovaTech",
  },
  {
    id: 4,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "From social media campaigns to PPC management, SK5 has been a one-stop solution for our digital marketing needs. Professional, responsive, and effective.",
    author: "James O'Connor",
    designation: "COO, BrightPath Systems",
  },
  {
    id: 5,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "Our lead generation pipeline has never been this healthy. SK5's B2B strategy was exactly what we needed to reach decision-makers in our industry.",
    author: "Laura Chen",
    designation: "VP of Growth, FinEdge",
  },
  {
    id: 6,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "They didn’t just provide a service—they became part of our team. Our marketing operations feel like a well-oiled machine now, all thanks to SK5.",
    author: "Michael Brooks",
    designation: "CEO, CloudCore Solutions",
  },
  {
    id: 7,
    picture:
      "https://www.techpromarketing.com/wp-content/uploads/2024/04/Alan-Sielbeck-Safe-Network-Solutions.jpeg",
    comment:
      "They didn’t just provide a service—they became part of our team. Our marketing operations feel like a well-oiled machine now, all thanks to SK5.",
    author: "Steve Smith",
    designation: "CTO, CloudCore Solutions",
  },
];

const Slick = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  let settings = {
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
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 2, // On mobile
        },
      },
    ],
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className="mt-20 md:mt-32">
        {testimonialData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`
                ${
                  slideIndex == index
                    ? "grayscale-0 opacity-100"
                    : "grayscale-100 opacity-60"
                } 
               relative flex flex-col shadow-faq-out-shadow pt-20 rounded-3xl bg-on-primary`}
            >
              <CustomImage
                src={item.picture}
                height={130}
                width={130}
                alt="author image"
                containerStyle={
                  "absolute left-1/2 -translate-x-1/2 -top-[81px] rounded-full"
                }
                className="rounded-full"
              />
              <div
                className="py-3 px-8 h-48 rounded-t-3xl"
                // data-swiper-parallax="-200"
              >
                <p className="text-center italic text-lg line-clamp-5">
                  {item.comment}
                </p>
              </div>
              <div
                className="flex flex-col relative gap-1 text-on-primary bg-gradient-to-r py-3 px-4 text-center rounded-b-3xl from-[#10A19A] to-[#2FAC6A]"
                // data-swiper-parallax="-100"
              >
                <p className="text-xl font-semibold">{item.author}</p>
                <p className="text-sm">{item.designation}</p>
                <FaQuoteRight
                  className="absolute z-0 text-primary opacity-25 right-4 top-1/2 -translate-y-1/2"
                  size={40}
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex items-center justify-center gap-4 pt-11">
        <button
          onClick={previous}
          className="custom-prev flex items-center justify-center size-12 rounded-full bg-on-primary shadow-faq-out-shadow cursor-pointer"
        >
          <IoChevronBackOutline className="font-bold text-primary" size={20} />
        </button>
        <button
          onClick={next}
          className="custom-next flex items-center justify-center size-12 rounded-full bg-on-primary shadow-faq-out-shadow cursor-pointer"
        >
          <IoChevronForwardOutline
            className="font-bold text-primary"
            size={20}
          />
        </button>
      </div>
    </>
  );
};

export default Slick;
