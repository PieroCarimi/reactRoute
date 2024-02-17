import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  } from "react-router-dom";
import './App.css';
import {Login} from './components/Login'
import Home from './components/Home';
import Details from './components/Details';
import Redirect from './components/Redirect';
import RouteNotFound from './components/RouteNotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GuestRoute } from './components/GuestRoute';

function App() {
  
  return(
  
    <HashRouter basename="/reactRoute">
      <Routes>

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/:idPost" element={<Details />} />

        <Route path="/404" element={<RouteNotFound />} />
        <Route path="*" element={<Redirect />} />
        
      </Routes>
    </HashRouter>   

  )
}

export default App;
