import React, { useContext, useState } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
  } from "react-router-dom";
import './App.css';
import {Login} from './components/Login'
import Home from './components/Home';
import { AppContext } from './Context';
import Details from './components/Details';
import Redirect from './components/Redirect';
import RouteNotFound from './components/RouteNotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GuestRoute } from './components/GuestRoute';

function App() {
  const{isLogged}= useContext(AppContext)
  console.log(isLogged)
  return(
  
    <BrowserRouter>
    <Routes>

      <Route element={<GuestRoute isLogged={isLogged} />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute isLogged={isLogged} />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/:idPost" element={<Details />} />

      <Route path="/404" element={<RouteNotFound />} />
      <Route path="*" element={<Redirect />} />
      
    </Routes>
    </BrowserRouter>   

  )
}

export default App;
