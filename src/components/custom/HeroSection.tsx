import Link from 'next/link';
import { Button } from '../ui/button';
import { Menu } from './Menu';
import { StrapiImage } from './StrapiImage';

interface LogoProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface LinkProps {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    logo: LogoProps;
    links: LinkProps[];
  };
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const { logo, links } = data;
  const imageUrl = 'http://localhost:1337' + logo.url;
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="logo">
          <img
            src={imageUrl}
            alt={logo.alternativeText || 'Logo'}
            className="w-auto"
          />
        </div>
        <div className="search flex gap-2">
          <input
            type="text"
            placeholder="Recherche"
            className="p-2 border rounded-md"
          />
          <Button>Rechercher</Button>
        </div>
      </section>
      <Menu data={{ links }} />
    </>
  );
}
