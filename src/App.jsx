import React from 'react';
import {Outlet} from 'react-router-dom'
import Sidenav from './Components/Sidenav';
import Home from './Components/Home.jsx';
import ProjectItem from './Components/ProjectItem';


function App() {
  return (
    <>
      <Sidenav/>
      <Outlet/>
      <Home/>
      <ProjectItem/>
  </>
  );
}

export default App;
