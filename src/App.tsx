import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

const App1 = lazy(() => import('app1/App'));
const App2 = lazy(() => import('app2/App'));
const OtherPage = lazy(() => import('app2/OtherPage'));

function App() {
  return (
      <div style={{padding: 40}}>
        <h1>Aplicación Contenedora</h1>
        <BrowserRouter>
          <nav style={{padding: "1rem", background: "#eee"}}>
            <Link to="/" style={{marginRight: 10}}>Inicio</Link>
            <Link to="/app1" style={{marginRight: 10}}>App 1</Link>
            <Link to="/app2" style={{marginRight: 10}}>App 2</Link>
            <Link to="/other-page">Other Page</Link>
          </nav>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<h2>Bienvenido al Shell</h2>}/>
                <Route path="/app1" element={<App1 />}/>
                <Route path="/app2" element={<App2 />}/>
                <Route path="/other-page" element={<OtherPage />}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
  );
}

export default App;
