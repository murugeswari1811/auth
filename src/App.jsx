import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
