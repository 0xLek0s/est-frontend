import Link from 'next/link'
import { StrapiImage } from './StrapiImage'

interface LogoProps {
  id: number
  url: string
  alternativeText: string
}

interface LinkProps {
  id: number
  url: string
  text: string
  isExternal: boolean
}

interface FooterProps {
  data: {
    id: number
    logo: LogoProps
    links: LinkProps[]
  }
}

export default function Footer({ data }: Readonly<FooterProps>) {
  const { logo, links } = data
  console.log(logo)
  return (
    <div>
      <StrapiImage
        key={logo.id}
        src={logo.url}
        alt={logo.alternativeText}
        width={164}
        height={164}
      />
      <div>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
