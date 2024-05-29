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
      className="ml-16 mt-6 mb-6 border-2 rounded"
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
              height={414}
              width={736}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  )
}
