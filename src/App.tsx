import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HealthCategories from "./components/HealthCategories"
import Services from "./components/Services"
import Doctors from "./components/Doctors"
import Articles from "./components/Articles"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <Hero />
        <HealthCategories />
        <Services />
        <Doctors />
        <Articles />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App