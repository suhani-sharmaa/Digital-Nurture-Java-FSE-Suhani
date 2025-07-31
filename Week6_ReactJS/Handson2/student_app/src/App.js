import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
function App() {
  return (
    <div className="container">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
