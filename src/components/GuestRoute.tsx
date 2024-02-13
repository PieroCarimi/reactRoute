import { Navigate, Outlet } from "react-router-dom";

export function GuestRoute ({isLogged}: any){
    if (isLogged) return <Navigate to="/" />;
    return <Outlet />;
}