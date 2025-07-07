import { ThemeProvider } from './components/theme-provider'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Services } from './components/services'
import { About } from './components/about'
import { Team } from './components/team'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="drdentplus-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App