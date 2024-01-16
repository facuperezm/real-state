import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo({ photos }: { photos: string[] }) {
  return (
    <Carousel>
      <CarouselPrevious
        variant="ghost"
        className="absolute top-1/2 left-2 z-10"
        size="icon"
      />
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
            <img
              src={photo}
              alt="property images"
              className="size-full object-cover aspect-square"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext
        variant="ghost"
        className="absolute top-1/2 right-2 z-10"
        size="icon"
      />
    </Carousel>
  );
}
