import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
 const Home = () =>
 {
     return(
    <div className="Home">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
    </header>

    </div>
     )
 }
 export default Home;