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
  return <></>;
}
