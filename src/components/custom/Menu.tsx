'use client'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

interface LinkProps {
  id: number
  url: string
  text: string
}

interface MenuProps {
  data: {
    links: LinkProps[]
  }
}

export function Menu({ data }: Readonly<MenuProps>) {
  const { links } = data
  return (
    // <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <NavigationMenuLink>Link</NavigationMenuLink>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>
    <nav className="menu p-2 bg-est-secondary">
      <ul className="flex justify-center items-center gap-12">
        {links.map((link) => (
          <li
            className="text-est-primary-text font-bold p-2 text-center uppercase tracking-tight hover:bg-est-primary transition-colors"
            key={link.id}
          >
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
