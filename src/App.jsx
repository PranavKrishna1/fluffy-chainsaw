import { Route, Routes } from 'react-router-dom';
import Home from './components/LoginForm/Home';
import Register from './components/LoginForm/Register';
import Dashboard from './components/Assets/Dashboard';

function App() {
  return (
   <Routes>
        <Route path='/' element ={<Home />}/>
        {/* <Route path='/login' element ={<Login/>}/> */}
        <Route path='/nextpage' element ={<Dashboard />}/>
        <Route path='/register' element ={<Register/>}/>
        {/* <Route path='*' element ={<Navigate to='/'/>}/> */}
      </Routes>

  );
}

export default App;

