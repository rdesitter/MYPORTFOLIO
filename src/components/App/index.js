import { Routes, Route } from 'react-router-dom';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import Project from '../../pages/Project';
import '../../styles/index.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/portfolio/:slug" element={ <Portfolio /> } />
        <Route path="/project/:slug" element={ <Project />} />
        <Route path="*" element={ <Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
