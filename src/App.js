import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from "./views/Home";
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Login id="tes"></Login>
      {/* <Home id="home" className="tes" style={{backgroundColor: "black",color: "white",display: "inline-block"}}></Home> */}
    </div>
  );
}

export default App;
