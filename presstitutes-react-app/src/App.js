import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Cited from './components/Cited';

function App() {
  return (
    <div className="App">
      < Header />
      < MainContent />
      < Cited />
      < Footer />
    </div>
  );
}

export default App;
