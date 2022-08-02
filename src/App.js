
import React, {useReducer, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Report from './pages/report';
// import Register from './pages/register';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch(action.type){
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload))
      localStorage.setItem("token", JSON.stringify(action.payload))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }
    case "LOGOUT":
      localStorage.clear()
      return {  
        ...state,
        isAuthenticated: false,
        user: action.payload.user
      }  
    default: 
      return state

  }
}




function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
    <div className='flex'>
      
      <Routes>

        <Route exact path="/" element={<Login/>}/>
        {/* <Route exact path="/register" element={<Register/>}/> */}
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/report" element={<Report/>}/>
      </Routes>
    </div>
    </BrowserRouter>

    
  );
}

export default App;
