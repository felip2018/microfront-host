import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {CustRlbButton, CustRlbHeader} from './constants/sherpa-tagged-components';
/*const App1 = lazy(() => import('app1/App'));
const App2 = lazy(() => import('app2/App'));
const OtherPage = lazy(() => import('app2/OtherPage'));*/

function App() {
  return (
      <div style={{padding: 40}}>
          <CustRlbHeader/>
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
                      <Route path="/" element={<>
                          <h2>Bienvenido al Shell</h2>
                          <p className={"clase1"}>Hola soy el mensaje de prueba</p>
                          <CustRlbButton
                              labelButton={"Click Me!"}
                              isDisabled={false}
                              isLarge
                              onClickButton={() => console.log('clicked')}
                          />
                      </>}/>
                      <Route path="/app1" element={<h2>APP ONE</h2>}/>
                      <Route path="/app2" element={<h2>APP TWO</h2>}/>
                      <Route path="/other-page" element={<h2>Other Page</h2>}/>
                  </Routes>
              </Suspense>
          </BrowserRouter>
      </div>
  );
}

export default App;
