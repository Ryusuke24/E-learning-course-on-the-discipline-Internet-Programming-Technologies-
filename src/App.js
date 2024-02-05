import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import style from "./App.module.scss";
import MainHTML from "./Components/Courses/HTML/MainHTML";
import MainCSS from "./Components/Courses/CSS/MainCSS";
import MainLayout from "./Components/Courses/WebsiteLayout/MainLayout";
import MainJS from "./Components/Courses/JavaScript/MainJS";
import MainPHP from "./Components/Courses/PHP/MainPHP";
import CoursesMain from "./Components/Courses/CoursesMain";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Courses">
          <Route index element={<CoursesMain />} />
          <Route path="HTML" element={<MainHTML />} />
          <Route path="CSS" element={<MainCSS />} />
          <Route path="Layout" element={<MainLayout />} />
          <Route path="JS" element={<MainJS />} />
          <Route path="PHP" element={<MainPHP />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
