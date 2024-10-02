import './App.css';
import Login from './routes/authStudent/LoginStudent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './routes/authStudent/RegisterStudent';
import LoginCompany from './routes/authCompany/LoginCompany';
import RegisterCompany from './routes/authCompany/RegisterCompany';
import Homepage from './routes/Homepage/Homepage';
import Area from './routes/areas/Area';
import Job from './routes/areas/Job';
import Profile from './routes/profile/Profile';
import PublishJob from './routes/job/PublishJob';
import ProfileAppliedStudent from './routes/profile/ProfileAppliedStudent';
import PublishedJob from './routes/job/PublishedJob';
import { Edit } from 'lucide-react';
import EditJob from './routes/job/EditJob';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />}/>

          <Route path='/loginCompany' element={<LoginCompany />}/>
          <Route path='/registerCompany' element={<RegisterCompany />}/>

          <Route path='/homepage' element={<Homepage/>} />

          <Route path='/area/:areaName' element={<Area />}/>

          <Route path='/area/:areaName/:id' element={<Job />} />

          <Route path='/profile' element={<Profile />}/>

          <Route path='/publishJob' element={<PublishJob />}/>

          <Route path='/publishedJob/:id' element={<PublishedJob />}/>

          <Route path='/profileAppliedStudent/:id' element={<ProfileAppliedStudent />} />

          <Route path='/editJob/:id' element={<EditJob />}/>
          
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
