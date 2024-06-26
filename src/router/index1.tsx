import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// 两种路由模式的组件 BrowserRouter（history模式） HashRouter(hash模式)

// const baseRouter = () => {
//     return ()
// }

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={ <Navigate to="/home" /> }></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default baseRouter;
