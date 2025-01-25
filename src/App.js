import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutMePage } from './pages/AboutMePage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { Layout } from './components/Layout'
export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<div> <Layout/> </div>} >
          <Route index element={<div> <HomePage/> </div>} />
          <Route path="/about" element={<div> <AboutMePage /> </div>} />
          <Route path="/portfolio" element={<div> <PortfolioPage /> </div>} />
          <Route path="/contact" element={<div> <ContactPage/> </div>} />
        </Route>
      </Routes>
  )
}