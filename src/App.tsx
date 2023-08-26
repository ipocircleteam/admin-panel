import React from 'react';
import { useSelector } from 'react-redux';
import './globals.css';
import Loader from './components/Loader/loader';
import { UserReducerType } from './types';

function App() {
  const view = useSelector((state: UserReducerType) => state.user.view)

  return (
    <div className="App">
      {view === "auth" && <Loader />}
      {view === "datafeed" && "DATA FEED HU MAI"}
      {view === "admin" && "ADMIN HU MAIN"}
    </div>
  );
}

export default App;
