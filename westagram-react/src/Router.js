import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* 경로 변경에 대해 편의 기능을 제공하는 컴포넌트 */}
      <Nav />
      {/* nav 컴포넌트 */}
      <Routes>
        {" "}
        {/*  <Routes> Route컴포넌트를 감싸는 역할라우트컴포넌트는 라우터의 지정된
         <Route path="/" element={<Login />} /> 경로와 일치하는 컴포넌트를 찾아 그려주는 역할 */}
        <Route path="/" element={<Login />} />
        {/* 경로를 할당하고 렌더링 될 컴포넌트를 할당 */}
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
      {/* footer 컴포넌트 */}
    </BrowserRouter>
  );
};

export default Router;
// 이렇게 만들어진 Router.js파일을 index.js render메서드로 인자로 전달해주면 3가지 경로에 해당하는 3가지 컴포넌트를 화면에 그릴 준비가 끝난 겁니다.
