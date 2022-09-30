import React from 'react';
import { Link } from 'react-router-dom';
import HelloContainer from './components/HelloContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to="/greetings">Link to Greetings</Link>
      <Routes>
        <Route path="/greetings" element={<HelloContainer />} />
      </Routes>
    </>
  );
}

export default App;
