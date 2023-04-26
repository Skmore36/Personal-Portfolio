
import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Experience from './Pages/Experience';
import Home from './Pages/Home';
import ProjectDisplay from './Pages/ProjectDisplay';
import Projects from './Pages/Projects';


function App() {
  useEffect(() => {
    document.title = 'Snehalkumar\'s Portfolio';
  }, []);
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <BackToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;