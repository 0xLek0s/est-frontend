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
  return (
    <div className="relative flex flex-col w-full m-auto justify-center items-center gap-3 pt-28 pb-14 bg-est-primary text-est-primary-text font-medium mt-14">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <StrapiImage
        key={logo.id}
        src={logo.url}
        alt={logo.alternativeText}
        width={164}
        height={164}
      />
      <p>&copy;2024 - EST Fes</p>
      <div className="flex gap-4">
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
