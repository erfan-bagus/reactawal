import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Home id="home" className="tes" style={{backgroundColor: "black",color: "white",display: "inline-block"}}></Home>
    </div>
  );
}

export default App;
