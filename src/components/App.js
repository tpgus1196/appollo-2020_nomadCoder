import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Hashrouter as Router} from "react-router-dom"; //옛날 버전
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        < Route exact path="/" element={< Home />} />
        < Route path="/:id" element={< Detail />} />
      </Routes>
    </Router>
  );
};

export default App;

//Route 프로퍼티 설정
//exact path="/" component={Home} 과거버전
//https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#advantages-of-route-element