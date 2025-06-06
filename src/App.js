import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserLog from './components/index.jsx';
import TeacherForm from './components/teacherForm.jsx';
import StudentForm from './components/studentForm.jsx';
import CounselorForm from './components/counselorForm.jsx';
import LancerForm from './components/lancerForm.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<UserLog />} />            {/* root route */}
        <Route path="index" element={<UserLog />} />
        <Route path="teacherForm" element={<TeacherForm />} />
        <Route path="studentForm" element={<StudentForm />} />
        <Route path="counselorForm" element={<CounselorForm />} />
        <Route path="lancerForm" element={<LancerForm />} />
        <Route path="*" element={<UserLog />} />            {/* fallback */}
      </Routes>
    </div>
  );
}

export default App;
