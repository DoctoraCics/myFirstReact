import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Employee/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. - Doctora - Bounding Joy
        </p>
        <p>{Hello}</p>
        <Greet name="james " heroName="Spider Man"/>
        <Greet name="あなた " heroName="ひつがや "/>
        <Greet name="ドク " heroName="The Hulk"/>
        <Greet name={Hello()} heroName = "spiderman"/>
        
       <Message/>
       <Button/>
        <p>Test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
