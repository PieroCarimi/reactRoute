import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../Context";

export function ProtectedRoute() {
    const { isLogged } = useContext(AppContext);
    if (!isLogged) return <Navigate to="/login" />;
    return <Outlet />;
}