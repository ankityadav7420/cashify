import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <hr />
        <Router>
            <Routes>
            <Route path="/" element={<Main />} />
            </Routes>
        </Router>
        
        <Footer />
    </div>
  );
}

export default App;
