import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <p style={{borderRadius: '50px', padding: '7px 20px', background: 'grey', position: 'fixed', left: '45%', color: 'white'}}>Em desenvolvimento</p>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
