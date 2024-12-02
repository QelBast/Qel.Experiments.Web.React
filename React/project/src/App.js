import './App.css';
import React from "react";
import {HomePage} from './pages/HomePage';
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
    return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage />}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}

export default App;
