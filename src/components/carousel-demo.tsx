import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDemo({ photos }: { photos: string[] }) {
	return (
		<Carousel>
			<CarouselPrevious variant="ghost" className="absolute left-2 top-1/2 z-10" size="icon" />
			<CarouselContent>
				{photos.map((photo, index) => (
					<CarouselItem key={index}>
						<img
							src={photo}
							alt="property images"
							className="aspect-square size-full object-cover"
						/>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselNext variant="ghost" className="absolute right-2 top-1/2 z-10" size="icon" />
		</Carousel>
	)
}
