
import Header from './components/Header';
import Feature from './components/Feature';
import StateOfArt from './components/StateOfArt';
import FreeOpenSimple from './components/FreeOpenSimple';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Feature />
      <StateOfArt />
      <FreeOpenSimple />
      <Footer />
    </div>
  );
};

export default App;
