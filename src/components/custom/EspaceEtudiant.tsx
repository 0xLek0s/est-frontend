interface LinkProps {
  id: number
  url: string
  text: string
}

interface EspaceEtudiantProps {
  data: {
    title: string
    links: LinkProps[]
  }
}

export default function EspaceEtudiant({
  data,
}: Readonly<EspaceEtudiantProps>) {
  const { title, links } = data
  return (
    <div className="justify-self-center self-center flex justify-center items-center flex-col gap-2">
      <h2 className="font-bold uppercase tracking-tight text-xl text-est-secondary">
        {title}
      </h2>
      <ul className="border-est-secondary border-solid border-2 p-8 inline-block list-none bg-est-secondary text-xl">
        {links.map((link) => (
          <li
            key={link.id}
            className="hover:bg-est-primary p-1 text-est-primary-text hover:cursor-pointer"
          >
            <a href={link.url} className="p-2">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
