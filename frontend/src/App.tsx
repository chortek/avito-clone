import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { isAuthenticated } from "./lib/auth";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white border-b px-4 py-3 flex gap-4 items-center">
        <Link to="/" className="font-bold text-lg">Avito-clone</Link>
        <div className="flex-1" />
        {isAuthenticated() ? (
          <>
            <Link to="/profile" className="text-blue-600">Профиль</Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-600">Вход</Link>
            <Link to="/register" className="text-blue-600">Регистрация</Link>
          </>
        )}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-8 text-center text-gray-600">
              Главная (скоро здесь будет лента объявлений)
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}