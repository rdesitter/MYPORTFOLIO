import { Routes, Route } from 'react-router-dom';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import '../../styles/index.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
