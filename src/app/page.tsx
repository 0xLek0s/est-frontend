import Body from '@/components/custom/Body'
import { HeroSection } from '@/components/custom/HeroSection'
import { getHomePageData } from '@/data/loaders'

function blockRenderer(block: any) {
  switch (block.__component) {
    case 'layout.hero-section':
      return <HeroSection key={block.id} data={block} />
    case 'layout.body':
      return <Body key={block.id} data={block} />
    default:
      return null
  }
}

export default async function Home() {
  const strapiData = await getHomePageData()

  const { blocks } = strapiData
  if (!blocks) return <p>No sections found</p>

  return <main>{blocks.map(blockRenderer)}</main>
}
