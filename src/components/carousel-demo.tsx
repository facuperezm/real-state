import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <img src="/images/local.jpeg" alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
