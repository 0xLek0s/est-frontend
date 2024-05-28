import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu } from './Menu'
import { StrapiImage } from './StrapiImage'
import { Input } from '../ui/input'

interface LogoProps {
  id: number
  url: string
  alternativeText: string
}

interface LinkProps {
  id: number
  url: string
  text: string
}

interface HeroSectionProps {
  data: {
    id: number
    __component: string
    logo: LogoProps
    links: LinkProps[]
  }
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const { logo, links } = data
  return (
    <>
      <section className="flex justify-between items-center bg-slate-100 gap-5">
        <div className="logo">
          <StrapiImage
            src={logo.url}
            alt={logo.alternativeText}
            width={320}
            height={320}
          />
        </div>
        <div></div>
        <div className="search flex gap-2 w-1/2 p-8">
          <Input type="text" placeholder="" className="h-10 w-full" />
          <Button className="h-10 bg-est-primary font-medium">
            Rechercher
          </Button>
        </div>
      </section>
      <Menu data={{ links }} />
    </>
  )
}
