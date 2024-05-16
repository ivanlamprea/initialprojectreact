import logo from './logo.svg';
import './App.css';
import ComponentClass01 from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world, I'm Iván Lamprea
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ComponentClass01 />
      </header>
    </div>
  );
}

export default App;
