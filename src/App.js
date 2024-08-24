import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing from react-router-dom
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import FAQ from './pages/FAQ';
import Team from './pages/Team';
import Charts from './pages/Charts';



// Importing your components

// Importing your Navbar component

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' exact component={Home} />
           <Route path='/reports' component={Reports} />
           <Route path='/products' component={Products} />
           <Route path='/faq' component={FAQ} />
           <Route path='/team' component={Team} />
           <Route path='/charts' component={Charts} />
           <Route path='/products' component={Products} />
           <Route path='/products' component={Products} />
        </Routes>
                
      </Router>
    </>
  );
}

export default App;
