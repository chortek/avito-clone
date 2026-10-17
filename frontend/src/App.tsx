import { useEffect, useState } from "react";
import { api } from "./lib/api";

export default function App() {
  const [health, setHealth] = useState<string>("loading...");

  useEffect(() => {
    api
      .get("/health/")
      .then((r) => setHealth(r.data.status))
      .catch((e) => setHealth("error: " + e.message));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-2xl shadow text-center">
        <h1 className="text-2xl font-bold mb-2">Avito-clone</h1>
        <p className="text-gray-600">
          Backend status: <span className="font-mono">{health}</span>
        </p>
      </div>
    </div>
  );
}