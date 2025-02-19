import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import './index.css'
import Sponsors from './pages/Sponsors'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SpringTournament from './pages/SpringTournament'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/spring-tournament" element={<SpringTournament />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;