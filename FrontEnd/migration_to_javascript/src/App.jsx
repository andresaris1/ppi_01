
import './App.css';
import { Map } from './components/Map/Map';
import { Login } from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp/SignUp';

function App() {
 
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Map/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
