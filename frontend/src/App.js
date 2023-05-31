
import './App.css';
 import {Routes,BrowserRouter,Route} from 'react-router-dom';
 import Setweight from './components/Setweight';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/Profile';
import Passwordreset from './components/Passwordreset';
import Quizform from './components/Quizform';
import ProtectedRoutes from './components/ProtectedRoutes';
import Courseplan from './components/Courseplan';
import Coursedashboard from './components/Coursedashboard';
import Assessmentdashboard from './components/Assessmentdashboard';
import Attendance from './components/Attendance';
import Scoreboard from './components/Scoreboard';
import Quizscoreboard from './components/Quizscoreboard';
import Listofassessments from './components/Listofassessments';
import Labform from './components/Labform';
import Participants from './components/Participants';
function App() {
  return (
    <div  >
 <BrowserRouter>
 <Routes>
        <Route exact path="/"element={<Login/>}/>
        <Route exact path="/setweight"element={<ProtectedRoutes component={Setweight}/>}/>
        <Route exact path="/participants"element={<ProtectedRoutes component={Participants}/>}/>
        <Route exact path="/labassessments"element={<ProtectedRoutes component={Labform}/>}/>
        <Route exact path="/dashboard"element={<ProtectedRoutes component={Dashboard}/>}/>
        <Route exact path="/quizscoreboard"element={<ProtectedRoutes component={Quizscoreboard}/>}/>
        <Route exact path="/listofassessments"element={<ProtectedRoutes component={Listofassessments}/>}/>
        <Route exact path="/profile"element={<ProtectedRoutes component={Profile}/>}/>
        <Route exact path="/coursedashboard"element={<ProtectedRoutes component={Coursedashboard}/>}/>
        <Route exact path="/Scoreboard"element={<ProtectedRoutes component={Scoreboard}/>}/>
        <Route exact path="/assessmentdashboard"element={<ProtectedRoutes component={Assessmentdashboard}/>}/>
        <Route exact path="/attendance"element={<ProtectedRoutes component={Attendance}/>}/>
        <Route exact path="/passwordreset"element={<ProtectedRoutes component={Passwordreset}/>}/>
    
        <Route exact path="/courseplan"element={<ProtectedRoutes component={Courseplan}/>}/>
        <Route exact path="/quizform"element={<ProtectedRoutes component={Quizform}/>}/>
      </Routes> 
 </BrowserRouter>
     </div>
  );
}

export default App;
