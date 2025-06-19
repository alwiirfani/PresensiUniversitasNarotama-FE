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
import Modal from "../modals/Modal";
import iklanList from "./IklanList";

const IklanBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const emblaApiRef = useRef(null); // untuk menyimpan referensi embla api dari carousel

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
          {iklanList.map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="p-2 w-full h-72"
                onClick={() => {
                  setSelectedImageIndex(index);
                  setIsOpen(true);
                }}>
                <img
                  src={src}
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
        {iklanList.map((_, index) => (
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

      {/* Modal Iklan */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          className="w-[90%] sm:w-3/4 max-w-none">
          <div className="flex items-center justify-center">
            <img
              src={iklanList[selectedImageIndex]}
              alt={`iklan-${selectedImageIndex}`}
              className="object-contain w-fit h-fit"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default IklanBanner;
