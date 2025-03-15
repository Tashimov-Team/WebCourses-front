import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CoursePage from './pages/CoursePage';
import Auth from './pages/Auth';
import Header from './components/Header';
import Buying from './pages/Buying';
import Contact from './pages/Contact';
import VideoPage from './pages/Video';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/pay/:id" element={<Buying />} />
          <Route path="/contact" element={<Contact />}/>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
          path='/video/:id'
          element={
            <ProtectedRoute>
              <VideoPage/>
            </ProtectedRoute>
          }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default App