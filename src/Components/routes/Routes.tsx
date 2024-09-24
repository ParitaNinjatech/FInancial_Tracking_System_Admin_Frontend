
import { Routes, Route } from 'react-router-dom';
import { SignUp, Signin,ForgotPassword } from "../index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/signIn' element={<Signin />} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
  );
};

export default AppRoutes;
