
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import CallApiM2 from './apicall/CallApiM2';





function App() {

  return (
    <div className="App">
    


<Routes>

   <Route path='/' element={<CallApiM2></CallApiM2>}></Route>
</Routes>

    </div>
  );
}

export default App;
