import './App.css';
import Login from './routes/authStudent/LoginStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './routes/authStudent/RegisterStudent';
import LoginCompany from './routes/authCompany/LoginCompany';
import RegisterCompany from './routes/authCompany/RegisterCompany';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />}/>

          <Route path='/loginCompany' element={<LoginCompany />}/>
          <Route path='/registerCompany' element={<RegisterCompany />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
