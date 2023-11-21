import { Navigate, useRoutes } from "react-router-dom";
import { SecondaryPage } from "./components/smart/pages/secondary-page";
import { Dashboard } from "./components/smart/pages/dashboard";

export function App() {
  return useRoutes([
    { path: "/secondary-page", element: <SecondaryPage /> },
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}
