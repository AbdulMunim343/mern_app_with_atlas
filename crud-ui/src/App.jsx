import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Employee from './pages/employee';
import AddEmployee from './pages/addemployee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/addemployee" element={<AddEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;
