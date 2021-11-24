import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/UI/Nav';
import Footer from './components/UI/Footer';
import Home from './containers/Home';
import Canvas from './containers/Canvas';
// import Gallery from './containers/Gallery';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/draw' element={<Canvas />} />
                    {/* <Route path="/gallery" element={<Gallery />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
