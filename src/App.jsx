import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { UserProvider } from './componentsData/UserContext';
import Home from './componentsData/home';
import UserDetails from './componentsData/user-details'

function App() {
    return (
      <UserProvider>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-details" element={<UserDetails />} />
          </Routes>
      </Router>
  </UserProvider>
    );
}

export default App;
