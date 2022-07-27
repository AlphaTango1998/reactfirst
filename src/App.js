import './App.css';
import Login from "./components/login";
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div className="App" >
      <header className="App-header">
       <h2>CRUD console</h2>
       
        <Router>
          <Routes>
            <Route path ='/' element={<Login/>}/>
            <Route path ='/Home' element={<Home/>}/>
          </Routes>
        </Router>
        
      </header>
    </div>
  );
};

export default App;
