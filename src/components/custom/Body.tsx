import HomeCarousel from './HomeCarousel'
import EspaceEtudiant from './EspaceEtudiant'
import Onglet from './Onglet'

interface AcutalitesProps {
  id: number
  title: string
  actualites: {
    data: {
      id: number
      titre: string
      date: string
      publishedAt: string
      description: Object
    }[]
  }
}

interface AppelOffresProps {
  id: number
  title: string
  appelOffres: {
    data: {
      id: number
      titre: string
      publishedAt: string
    }[]
  }
}

interface RecrutementsProps {
  id: number
  title: string
  recrutements: {
    data: {
      id: number
      titre: string
      distance: boolean
      publishedAt: string
      salaire: number
    }[]
  }
}

interface EvenementsProps {
  id: number
  title: string
  evenements: {
    data: {
      id: number
      titre: string
      date: string
      publishedAt: string
      description: Object
    }[]
  }
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
    espaceEtudiant: EspaceEtudiantProps
    actualites: AcutalitesProps
    evenements: EvenementsProps
    recrutements: RecrutementsProps
    appelOffres: AppelOffresProps
  }
}

export default function Body({ data }: Readonly<BodyProps>) {
  const {
    carousel,
    espaceEtudiant,
    actualites,
    evenements,
    recrutements,
    appelOffres,
  } = data
  const evenementsList = evenements.evenements.data
  const recrutementsList = recrutements.recrutements.data
  const appelOffresList = appelOffres.appelOffres.data
  const acutalitesList = actualites.actualites.data
  const images = carousel.images.data

  return (
    <div className="grid grid-cols-2 gap-20 items-stretch justify-items-center">
      <HomeCarousel data={{ images }} />
      <EspaceEtudiant data={espaceEtudiant} />
      <Onglet
        data={{
          id: actualites.id,
          title: actualites.title,
          list: acutalitesList,
        }}
      />
      <Onglet
        data={{
          id: evenements.id,
          title: evenements.title,
          list: evenementsList,
        }}
      />
      <Onglet
        data={{
          id: recrutements.id,
          title: recrutements.title,
          list: recrutementsList,
        }}
      />
      <Onglet
        data={{
          id: appelOffres.id,
          title: appelOffres.title,
          list: appelOffresList,
        }}
      />
    </div>
  )
}
