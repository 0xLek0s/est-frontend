'use client'
import { flattenAttributes } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

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
    <Carousel
      className="max-w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <StrapiImage
              key={image.id}
              src={image.url}
              alt={image.alternativeText}
              height={600}
              width={1200}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
