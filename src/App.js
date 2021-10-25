import './App.css';
import Jumbotron from './components/Jumbotron'
import Footer from './components/footer/Footer'
import Main from './components/Main/Main'
import Section from './components/Section/Section'

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Main/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
