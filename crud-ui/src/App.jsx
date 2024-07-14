import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Student from './pages/student';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/students" element={<Student />} />
      </Routes>
    </Router>
  );
};

export default App;
