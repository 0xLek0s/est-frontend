interface LinkProps {
  id: number;
  url: string;
  text: string;
}

interface EspaceEtudiantProps {
  data: {
    title: string;
    links: LinkProps[];
  };
}

export default function EspaceEtudiant({
  data,
}: Readonly<EspaceEtudiantProps>) {
  const { title, links } = data;
  return <div className="flex justify-center items-center">
    <div>
    <h2 className="font-bold text-3xl">{title}</h2>
    <ul className="border-black border-solid border-2 p-5 list-disc inline-block">
      {links.map((link) => (
        <li key={link.id}>
          <a className="hover:underline" href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
    </div>
  </div>;
}
