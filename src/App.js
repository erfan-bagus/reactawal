import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from "./views/Home";
import Login from './views/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores';
import CCNav from './components/CCNav';
import Cart from './views/Cart';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <CCNav/> 
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home id="home" className="tes" style={{backgroundColor: "black",color: "white",display: "inline-block"}}></Home>}></Route>
          <Route path='/login' element={<Login id="tes"></Login>}> </Route>
          <Route path='/cart' element={<Cart></Cart>}> </Route>
        </Routes>
      </Provider>
      </BrowserRouter>
      {/*  */}
      
    </div>
  );
}

export default App;
