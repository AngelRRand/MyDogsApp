import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardDetail from './views/component/Cards/CardDetail';
import { Form } from './views/Form';
import Home from './views/Home';
import LandingPage from './views/LandingPage';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<LandingPage/>} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/dogs/:id' element={<CardDetail/>} />
        <Route path='/create' element={<Form/>} />
      </Routes>
      
    </div>
  );
}

export default App;
