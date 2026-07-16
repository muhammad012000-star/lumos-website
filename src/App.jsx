import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ContactOverlay from './components/ContactOverlay.jsx'
import { ContactProvider } from './context/ContactContext.jsx'
import { asset } from './utils/asset.js'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import LaunchKits from './pages/LaunchKits.jsx'
import GrowthPlans from './pages/GrowthPlans.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <ContactProvider>
      <div
        className="noise-overlay"
        style={{ backgroundImage: `url(${asset('/assets/images/noise-bg-BO_BuknL.png')})` }}
      />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/launch-kits" element={<LaunchKits />} />
        <Route path="/services/monthly-retainers" element={<GrowthPlans />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ContactOverlay />
    </ContactProvider>
  )
}
