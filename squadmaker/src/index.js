import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

function App(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>

    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

);
