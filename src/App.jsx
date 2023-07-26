
import './App.css';
import Header from './componrnts/Header/Header';
import Hero from './componrnts/Hero/Hero';
import Companies from './componrnts/Companies/Companies';
import Residencies from './componrnts/Residencies/Residencies';

function App() {
  return (
    <div className='App'>
      <div>
        <div className="white_gradient" />
      <Header />
      <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
