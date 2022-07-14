import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import { Nava } from "./Nava";
import Content from "./Content";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  var togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.getElementById("root").style.backgroundColor ="#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.getElementById("root").style.backgroundColor = "#f8f9fa";
    }
  };
  return (
    <BrowserRouter>
    <LoadingBar color='#f11946' progress="100"/>
      <Nava mode={mode} togglemode={togglemode} />
      <Routes>
        <Route index element={<Content key="general" mode={mode} category="" />}/>
        <Route exact path='/home' element={<Content key="general" mode={mode} category="" />}/>
        <Route exact path='/sports' element={<Content key="sports" mode={mode} category="sports" />} />
        <Route exact path='/business' element={<Content key="business" mode={mode} category="business" />} />
        <Route exact path='/technology' element={<Content key="technology" mode={mode} category="technology" />} />
        <Route exact path='/science' element={<Content key="science" mode={mode} category="science" />} />
        <Route exact path='/politics' element={<Content key="politics" mode={mode} category="politics" />} />
        <Route exact path='/world' element={<Content key="world" mode={mode} category="world" />} />
        <Route exact path='/national' element={<Content key="national" mode={mode} category="national" />} />
        <Route exact path='/entertainment' element={<Content key="entainment" mode={mode} category="entertainment" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
