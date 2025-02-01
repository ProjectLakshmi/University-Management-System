import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ChooseUser from './components/ChooseUser'
import AdminSignIn from './components/AdminSignIn'
import StudentSignIn from './components/StudentsSignIn'
import TeacherSignIn from './components/TeachersSignIn'

//Admin sign in sections
import AdminDashboard from './pages/Admin/Dashboard'

import Announcement from './pages/Admin/Annoucement'
import Assignment from './pages/Admin/Assignment'
import Attendance from './pages/Admin/Attendance'
import Classes from './pages/Admin/Classes'
import EventCalendar from './pages/Admin/EventCalendar'
import Exam from './pages/Admin/Exam'
import Library from './pages/Admin/Library'
import Performance from './pages/Admin/Performance'
import SettingProfile from './pages/Admin/SettingsProfile'
import Sidebar from './pages/Admin/Sidebar'
import Student from './pages/Admin/Students'
import Teacher from './pages/Admin/Teachers'


//Student login section
import StudentDashboard from './pages/Students/Dashboard'
import StudentsAssignment from './pages/Students/Assignment'
import ExamSection from './pages/Students/Exam'
import PerformanceSection from './pages/Students/Performance'
import AttendanceSection from './pages/Students/Attendance'
import LibrarySection from './pages/Students/Library'
import AnnouncementSection from './pages/Students/Annoucement'
import ProfileSection from './pages/Students/Profile'


//Teacher Sign in section
import TeacherDashboard from './pages/Teachers/Dashboard'
import ClassSection from './pages/Teachers/Classes'
import CheckAttendanceSection from './pages/Teachers/Attendance'
import AssignmentSection from './pages/Teachers/Assignment'
import CheckAnnouncementSection from './pages/Teachers/Annoucement'
import EventSection from './pages/Teachers/Event'
import CheckExamsSection from './pages/Teachers/Exam'
import CheckPerformanceSection from './pages/Teachers/Performance'
import TeacherProfileSection from './pages/Teachers/Profile'
import StudentSection from './pages/Teachers/Students'
import TeacherSection from './pages/Teachers/Teachers'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* All the Sign-In Routes */}
        <Route path='/choose-user' element={<ChooseUser />} />
        <Route path='/admin-signIn' element={<AdminSignIn />} />
        <Route path='/student-signIn' element={<StudentSignIn />} />
        <Route path='/teacher-signIn' element={<TeacherSignIn />} />

        {/* All the dashboard routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/student/dashboard' element={<StudentDashboard />} />
        <Route path='/teacher/dashboard' element={<TeacherDashboard/>} />

        {/* All Admin Routes Section */}
        <Route path='/admin/classes' element={<Classes />} />
        <Route path='/admin/exams' element={<Exam />} />
        <Route path='/admin/attendance' element={<Attendance />} />
        <Route path='/admin/performance' element={<Performance />} />
        <Route path='/admin/students' element={<Student />} />
        <Route path='/admin/teachers' element={<Teacher />} />
        <Route path='/admin/assignments' element={<Assignment />} />
        <Route path='/admin/library' element={<Library />} />
        <Route path='/admin/communication' element={<Announcement />} />
        <Route path='/admin/events' element={<EventCalendar />} />
        <Route path='/admin/settings' element={<SettingProfile />} />

        {/* Student section Routes */}
        <Route path='/student/assignment' element={<StudentsAssignment />} />
        <Route path='/student/exams' element={<ExamSection />} />
        <Route path='/student/performance' element={<PerformanceSection />} />
        <Route path='/student/attendance' element={<AttendanceSection />} />
        <Route path='/student/library' element={<LibrarySection />} />
        <Route path='/student/communication' element={<AnnouncementSection />} />
        <Route path='/student/settings' element={<ProfileSection />} />

        {/* Teacher Section Routes */}
        <Route path='/teachers/classes' element={<ClassSection />} />
        <Route path='/teachers/attendance' element={<CheckAttendanceSection />} />
        <Route path='/teachers/assignmnets' element={<AssignmentSection />} />
        <Route path='/teachers/communication' element={<CheckAnnouncementSection />} />
        <Route path='/teachers/events' element={<EventSection />} />
        <Route path='/teachers/exams' element={<CheckExamsSection/>} />
        <Route path='/teachers/performance' element={<CheckPerformanceSection />} />
        <Route path='/teachers/settings' element={<TeacherProfileSection />} />
        <Route path='/teachers/students' element={< StudentSection />} />
        <Route path='/teachers/teachers' element={<TeacherSection  />} />
       

      </Routes>
    </Router>
  )
}

export default App
