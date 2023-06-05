import React from "react";
import Birthday from "./component/Birthday";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generate from "./component/Generate";
import RouterBirthday from "./component/RouterBirthday";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Birthday />}></Route>
          <Route path="/generate" element={<Generate />}></Route>
          <Route path="/:name/:month/:day" element={<RouterBirthday />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

