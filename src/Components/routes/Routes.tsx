import { Routes, Route, useLocation } from 'react-router-dom';
import { SignUp, Signin, ForgotPassword, Profile, Header,Dashboard,AddAgent,AgentList } from "../index";

const AppRoutes = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/signup', '/signIn','/forgotpassword']; 
  return (
    <>
      { !noHeaderRoutes.includes(location.pathname) && <Header /> }
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signIn' element={<Signin />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/AddAgent' element={<AddAgent/>} />
        <Route path='/list-Agent' element={<AgentList/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
