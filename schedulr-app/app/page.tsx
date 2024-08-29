import Header from '../components/Header'
import LandingHero from '../components/LandingHero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Header />
      <main className="flex-grow">
        <LandingHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-base-200 h-64 rounded-lg animate-pulse"></div>
            <div className="bg-base-200 h-64 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}