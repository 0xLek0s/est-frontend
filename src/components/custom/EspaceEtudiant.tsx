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
    <div className="flex justify-center items-center flex-col gap-2">
      <h2 className="font-bold text-4xl">{title}</h2>
      <ul className="border-black border-solid border-2 rounded p-5 inline-block list-none">
        {links.map((link) => (
          <li key={link.id} className="text-2xl">
            <a className="hover:underline" href={link.url}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
