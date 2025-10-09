import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Learn from './pages/Learn'
import LectureDetail from './pages/LectureDetail'
import Navbar from './components/Navbar'
import './index.css'
import Sponsors from './pages/Sponsors'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Tournament from './pages/Tournament'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:id" element={<LectureDetail />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/tournament" element={<Tournament />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;