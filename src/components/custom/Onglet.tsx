interface OngletProps {
  data: {
    id: number
    title: string
    list: Object[]
  }
}

export default function Onglet({ data }: Readonly<OngletProps>) {
  const { title, list } = data
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex flex-col space-y-4">
        {list.map((item: any) => (
          <div key={item.id}>
            <h1>{item.titre}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
