import { Link } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { StrapiImage } from './StrapiImage';

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}

interface SocialsProps {
  id: number;
  url: string;
  image: ImageProps;
}

interface HeaderProps {
  data: {
    contact: string;
    socials: SocialsProps[];
  };
}

export default function Header({ data }: Readonly<HeaderProps>) {
  const { contact, socials } = data;
  console.log(contact);
  return (
    <div className="flex items-center justify-between">
      <div>{contact}</div>
      <div className="flex items-center justify-center">
        {socials.map((social) => (
          <Link key={social.id} size="24" href="">
            <StrapiImage
              alt={social.image.alternativeText}
              src={social.image.url}
              height={24}
              width={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
