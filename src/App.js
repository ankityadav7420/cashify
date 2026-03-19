import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <hr />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
