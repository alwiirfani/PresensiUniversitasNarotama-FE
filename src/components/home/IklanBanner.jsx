import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { cn } from "@/lib/utils";

import dummyImage from "../../assets/iklan/dummy-image.png";

const IklanBanner = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const emblaApiRef = useRef(null); // untuk menyimpan referensi embla api dari carousel
  const [selectedIndex, setSelectedIndex] = useState(0);

  const arrayIklan = [
    dummyImage,
    dummyImage,
    dummyImage,
    dummyImage,
    dummyImage,
  ];

  return (
    <div className="w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current?.stop()}
        onMouseLeave={() => autoplay.current?.play()}
        setApi={(api) => {
          emblaApiRef.current = api;
          setSelectedIndex(api.selectedScrollSnap());
          api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
        }}>
        <CarouselContent>
          {Array.from({ length: arrayIklan.length }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-2 w-full h-72">
                <img
                  src={arrayIklan[index]}
                  alt={`iklan-${index}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>

      <div className="flex justify-center sm:mt-3 gap-2">
        {arrayIklan.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApiRef.current?.scrollTo(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              selectedIndex === index ? "bg-gray-800" : "bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default IklanBanner;
