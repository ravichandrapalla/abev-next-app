"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

const TestimonialsMock = [
  {
    headerTitle: "Testimonials",
    headerName: "Here's what our amazing clients are saying",
    quotes: [
      {
        short: "I never really lost it to begin with",
        long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.",
        userBanner: "/images/user8.jpg",
      },
      {
        short: "this is soo cool",
        long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.",
        userBanner: "/images/user9.jpg",
      },
      {
        short: "fantastic product",
        long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisi viverra felis eleifend ornare urna. Eu mauris, velit volutpat massa volutpat. Risus pellentesque felis nisl ut laoreet euismod vel, integer. Massa sodales lorem nisi, sed massa volutpat.",
        userBanner: "/images/user10.jpg",
      },
    ],
  },
];

const Testimonials = () => {
  const testimonials = TestimonialsMock[0];
  const [api, setApi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.quotes.length;

  // Update currentIndex when carousel changes
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Cleanup
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Setup autoplay effect
  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [api]);

  // Custom navigation function
  const goToSlide = useCallback(
    (index) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  return (
    <div className="flex flex-col space-y-4 px-2 text-center mt-15 mb-15">
      <p>{testimonials.headerTitle}</p>
      <p className="text-xl font-bold">{testimonials.headerName}</p>

      <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.quotes.map((item, index) => (
            <CarouselItem key={index} className="pt-4">
              <div className="text-start bg-white rounded-lg shadow">
                <p className="p-2 text-lg font-medium">{`"${item.short}."`}</p>
                <p className="p-2 text-gray-600">{item.long}</p>
                <div className="relative h-70 m-2">
                  <Image
                    src={item.userBanner}
                    alt="testimonial-image"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" /> */}
      </Carousel>

      {/* Indicators */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-2xl transition-all ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
