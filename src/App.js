import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NotFound from './components/pages/NotFound'
import MainPage from './components/pages/MainPage'
import Tables from './components/pages/Tables'
import Footer from './components/views/Footer'
import Header from './components/views/Header'

function App() {
  return (
    <main>
      <Container>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
