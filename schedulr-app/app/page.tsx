import Header from '../components/Header'
import LandingHero from '../components/LandingHero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <LandingHero />
      </main>
    </div>
  )
}