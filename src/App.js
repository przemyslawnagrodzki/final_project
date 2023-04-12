import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import { Container } from 'react-bootstrap';
import NotFound from './components/pages/NotFound'
import MainPage from './components/pages/MainPage'
import Tables from './components/pages/Tables'

function App() {
  return (
    <main>
      <NavBar>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </NavBar>
    </main>
  );
}

export default App;
