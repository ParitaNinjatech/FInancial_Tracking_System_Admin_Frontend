import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { 
  SignUp, 
  Signin, 
  ForgotPassword, 
  Profile, 
  Header, 
  Dashboard, 
  AddAgent, 
  AgentList, 
  ListTransaction, 
  NotFound 
} from "../index";
import ProtectedRoute, { IsLoggedIn } from './RouteGuard';

const AppRoutes = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/not-found', '/signup', '/signin', '/forgotpassword', '/']; 

  return (
    <>
      { !noHeaderRoutes.includes(location.pathname) && <Header /> }

      <Routes>
        {/* Public routes */}
        <Route path='/' element={<SignUp />} />
        <Route path='/signup' element={IsLoggedIn() ? <Navigate to="/home" /> : <SignUp />} />
        <Route path='/signin' element={ IsLoggedIn() ? <Navigate to="/home" /> : <Signin />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />

        {/* Protected /home routes */}
        <Route 
          path='/home' 
          element={
            <ProtectedRoute> 
              <Outlet /> 
            </ProtectedRoute>
          }
        >
          <Route path='profile' element={<Profile />} />
          <Route path='' element={<Dashboard />} />
          <Route path='AddAgent' element={<AddAgent />} />
          <Route path='list-Agent' element={<AgentList />} />
          <Route path='AllTransaction' element={<ListTransaction />} />
        </Route>

        {/* Wildcard route for Not Found */}
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
