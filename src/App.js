// import logo from './logo.svg';
// import './App.css';

import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Home id="home" className="tes" style={{backgroundColor: "black",color: "white",display: "inline-block"}}></Home>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;