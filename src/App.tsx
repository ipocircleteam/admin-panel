import React from 'react';
import { useSelector } from 'react-redux';
import './globals.css';
import Loader from './components/Loader/loader';
import { UserReducerType } from './types';
import DataEntry from './views/data-entry';
import Admin from './views/admin';

function App() {
  const view = useSelector((state: UserReducerType) => state.user.view)

  return (
    <div className="App">
      {view === "auth" && <Loader />}
      {view === "DATA ENTRY" && <DataEntry />}
      {view === "ADMIN" && <Admin />}
    </div>
  );
}

export default App;
