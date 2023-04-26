import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NotFound from './components/pages/NotFound'
import MainPage from './components/pages/MainPage'
import Tables from './components/pages/Tables'
import Footer from './components/views/Footer'
import Header from './components/views/Header'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTables } from './redux/tablesRedux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTables())
  }, [dispatch])

  return (
    <main>
      <Container>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/table/:id" element={<Tables />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;