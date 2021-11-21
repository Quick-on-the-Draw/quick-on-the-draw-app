import './App.css';
import Canvas from './containers/Canvas';
import Nav from './components/UI/Nav';
import Footer from './components/UI/Footer';
import Home from './containers/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draw" element={<Canvas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
