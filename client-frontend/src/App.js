import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Naviggation from './components/Naviggation'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './pages/Chat'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Naviggation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
