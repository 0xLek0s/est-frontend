import HomeCarousel from './HomeCarousel'
import EspaceEtudiant from './EspaceEtudiant'
import Onglet from './Onglet'

interface OngletProps {
  title: string;
  links: Object;
}

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
    espaceEtudiant: EspaceEtudiantProps,
    actualites: OngletProps,
    evenements: OngletProps,
    recrutements: OngletProps,
    appelOffres: OngletProps
  }
}

export default function Body({ data }: Readonly<BodyProps>) {
  const { carousel, espaceEtudiant, actualites, evenements, recrutements, appelOffres } = data
  const images = carousel.images.data
  console.log(actualites.links);
  return (
    <div className='grid grid-cols-2 gap-20 mr-20 ml-20 mt-10'>
      <HomeCarousel data={{ images }} />
      <EspaceEtudiant data={espaceEtudiant} />
      <Onglet title={actualites.title} list={actualites.links} />
      <Onglet title={evenements.title} list={evenements.links} />
      <Onglet title={recrutements.title} list={recrutements.links} />
      <Onglet title={appelOffres.title} list={appelOffres.links} />

    </div>
  )
}
