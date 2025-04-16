"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "GIving you be the best deal",
      src: "pexels-kindelmedia-7578896.jpg",
    },
    {
      title: "Sale at best price",
      src: "pexels-kindelmedia-7578901.jpg",
    },
    {
      title: " Great price",
      src: "pexels-rdne-8292808.jpg",
    },
    {
      title: "Continuous communication",
      src: "pexels-thirdman-8470848.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
