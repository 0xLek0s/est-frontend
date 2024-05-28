import { flattenAttributes } from '@/lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'
import { StrapiImage } from './StrapiImage'

interface ImageProps {
  id: number
  url: string
  alternativeText: string
}

interface HomeCarouselProps {
  data: {
    images: ImageProps[]
  }
}

export default function HomeCarousel({ data }: Readonly<HomeCarouselProps>) {
  const { images } = data
  return (
    <Carousel className="">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem>
            <StrapiImage
              key={image.id}
              src={image.url}
              alt={image.alternativeText}
              height={400}
              width={10000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
