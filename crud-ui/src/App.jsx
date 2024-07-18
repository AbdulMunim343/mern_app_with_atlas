import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from './hooks/useAuthContext';
import Login from './pages/login';
import SignUp from './pages/signup';
import Employee from './pages/employee';
import AddEmployee from './pages/addemployee';

const App = () => {
  const { user } = useAuthContext()
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
          <Route path="/" element={user ? <Employee /> : <Navigate to="/login" />} />
          <Route path="/addemployee/:id" element={user ? <AddEmployee /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
