import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import MainHTML from "./Components/Courses/HTML/MainHTML";
import MainCSS from "./Components/Courses/CSS/MainCSS";
import MainLayout from "./Components/Courses/WebsiteLayout/MainLayout";
import MainJS from "./Components/Courses/JavaScript/MainJS";
import MainPHP from "./Components/Courses/PHP/MainPHP";
import CoursesMain from "./Components/Courses/CoursesMain";
import AdvanceCoursesMain from "./Components/AdvanceCourses/AdvanceCoursesMain";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import LessonHTML1 from "./Components/Courses/HTML/LessonHTML1/LessonHTML1";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "./redux/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="Courses">
          <Route index element={<CoursesMain />} />
          <Route path="HTML">
            <Route index element={<MainHTML />} />
            <Route path="1" element={<LessonHTML1 />} />
            <Route path="2" element={<LessonHTML1 />} />
          </Route>
          <Route path="CSS" element={<MainCSS />} />
          <Route path="Layout" element={<MainLayout />} />
          <Route path="JS" element={<MainJS />} />
          <Route path="PHP" element={<MainPHP />} />
        </Route>
        <Route path="AdvanceCourses">
          <Route index element={<AdvanceCoursesMain />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
