import Link from 'next/link';

interface LinkProps {
  id: number;
  url: string;
  text: string;
}

interface MenuProps {
  data: {
    links: LinkProps[];
  };
}

export function Menu({ data }: Readonly<MenuProps>) {
  const { links } = data;
  return (
    <nav className="menu">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="text-blue-500 hover:underline" href={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
