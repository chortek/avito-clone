import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { clearTokens } from "../lib/auth";
import type { User } from "../lib/auth";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/me/")
      .then((r) => setUser(r.data))
      .catch(() => {
        setError("Не удалось загрузить профиль");
      });
  }, []);

  function logout() {
    clearTokens();
    navigate("/login");
  }

  if (error) return <p className="p-8 text-red-600">{error}</p>;
  if (!user) return <p className="p-8">Загрузка...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow space-y-3">
        <h1 className="text-2xl font-bold">Профиль</h1>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Логин:</b> {user.username}</p>
        <p><b>Город:</b> {user.city || "—"}</p>
        <p><b>Телефон:</b> {user.phone || "—"}</p>
        <p><b>Рейтинг:</b> {user.rating}</p>
        <button
          onClick={logout}
          className="w-full bg-gray-800 text-white rounded-lg py-2 font-medium hover:bg-gray-900"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}