import { useRef } from 'react';
import './App.css';
import { Map } from './components/Map/Map';
import { Login } from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './components/SignUp/SignUp';
import { Home } from './components/Home/Home';
import { Redirect } from './components/utils/Redirect';
import { GenericPage } from './components/GenericPage/GenericPage';
import { Profile } from './components/Profile/Profile';

function App() {

  const appContainerRef = useRef(null)

  return (
    <div className='App' ref={appContainerRef}>
      <GenericPage>
        <Routes>
          <Route path='/' element={<Redirect to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/map' element={<Map appRef = {appContainerRef} />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={ <SignUp/>}/>
          <Route path='/profile' element={ <Profile/>}/>
        </Routes>
      </GenericPage>
    </div>
  )
}

export default App
