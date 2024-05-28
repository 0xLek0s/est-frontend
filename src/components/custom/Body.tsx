import HomeCarousel from './HomeCarousel'
import EspaceEtudiant from './EspaceEtudiant'

interface ImageProps {
  id: number
  url: string
  alternativeText: string
}

interface CarouselProps {
  id: number
  images: {
    data: ImageProps[]
  }
}

interface LinkProps {
  id: number
  url: string
  text: string
}

interface EspaceEtudiantProps {
  id: number
  title: string
  links: LinkProps[]
}

interface BodyProps {
  data: {
    carousel: CarouselProps
    espaceEtudiant: EspaceEtudiantProps
  }
}

export default function Body({ data }: Readonly<BodyProps>) {
  const { carousel, espaceEtudiant } = data
  const images = carousel.images.data
  return (
    <div className='grid grid-cols-2 gap-20 mr-20 ml-20 mt-10'>
      <HomeCarousel data={{ images }} />
      <EspaceEtudiant data={espaceEtudiant} />
    </div>
  )
}
