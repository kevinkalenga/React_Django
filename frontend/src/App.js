import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

