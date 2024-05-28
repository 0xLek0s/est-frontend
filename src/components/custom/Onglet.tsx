

interface OngletProps {
    title: string;
    list: any;
}

export default function Onglet({ title, list }: Readonly<OngletProps>) {
    
    return (
        <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="flex flex-col space-y-4">
                {
                    list.data.map((item: any) => (
                        console.log(item),
                        <div key={item.id}>
                            <h1>{item.titre}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}