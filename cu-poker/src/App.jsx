import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import './index.css'
import Sponsors from './pages/Sponsors'
import MTTInterestForm from './pages/MTT_Interest_Form'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/spring-mTT" element={<MTTInterestForm />} />
      </Routes>
    </Router>
  )
}

export default App;