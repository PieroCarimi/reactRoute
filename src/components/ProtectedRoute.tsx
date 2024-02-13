import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute({ isLogged }: any) {
    if (!isLogged) return <Navigate to="/login" />;
    return <Outlet />;
}