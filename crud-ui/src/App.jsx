import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Employee from './pages/employee';
import AddEmployee from './pages/addemployee';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Employee />} />
        <Route path="/addemployee/:id" element={<AddEmployee />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
