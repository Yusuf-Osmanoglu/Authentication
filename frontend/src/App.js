import './App.css';
import HomePage from './page/homePage/homePage';
import Login from './page/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, RequireAuthMiddleware, NonRequireAuthMiddleware } from './Auth/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NonRequireAuthMiddleware>
                <Login />
              </NonRequireAuthMiddleware>
            }
          />
          <Route
            path="/homePage"
            element={
              <RequireAuthMiddleware>
                <HomePage />
              </RequireAuthMiddleware>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
