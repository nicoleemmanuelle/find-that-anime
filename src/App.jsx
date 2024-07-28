import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Search from './Search.jsx'
import ResultsPage from './ResultsPage';


function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/find-that-anime" element={<Search/>} />
          <Route path="/results" element={<ResultsPage/>} />
        </Routes>
      </Router>
      <Footer />
    </>

  );
}

export default App
