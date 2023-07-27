
import './App.css';
import Header from './componrnts/Header/Header';
import Hero from './componrnts/Hero/Hero';
import Companies from './componrnts/Companies/Companies';
import Residencies from './componrnts/Residencies/Residencies';
import Value1 from './componrnts/Value/Value';
import Contact from './componrnts/Contact/Contact';
import GetStarted from './componrnts/GetStarted/GetStarted';
import Footer from './componrnts/Footer/Footer';

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
      <Value1 />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
