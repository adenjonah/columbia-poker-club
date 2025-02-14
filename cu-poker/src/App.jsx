import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import './index.css'
import Sponsors from './pages/Sponsors'
import MTTInterestForm from './pages/MTT_Interest_Form'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/spring-mtt" element={<MTTInterestForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;