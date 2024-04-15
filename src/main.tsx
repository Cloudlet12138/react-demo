import React from "react";
import ReactDOM from "react-dom/client";

// 初始化样式
import "reset-css";

// 引入UI框架
// import 'antd/dist/antd.css';

// 全局样式
import "@/assets/styles/global.scss";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import Router from './router'

// import

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
