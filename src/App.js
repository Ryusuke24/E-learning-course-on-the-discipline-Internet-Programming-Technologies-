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
import LessonHTML2 from "./Components/Courses/HTML/LessonHTML2/LessonHTML2";
import LessonHTML3 from "./Components/Courses/HTML/LessonHTML3/LessonHTML3";
import LessonHTML4 from "./Components/Courses/HTML/LessonHTML4/LessonHTML4";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "./redux/auth";
import LessonCSS1 from "./Components/Courses/CSS/LessonCSS1/LessonCSS1";
import LessonCSS2 from "./Components/Courses/CSS/LessonCSS2/LessonCSS2";
import LessonCSS3 from "./Components/Courses/CSS/LessonCSS3/LessonCSS3";
import LessonCSS4 from "./Components/Courses/CSS/LessonCSS4/LessonCSS4";

import LessonLayout1 from "./Components/Courses/WebsiteLayout/LessonLayout1/LessonLayout1";
import LessonLayout2 from "./Components/Courses/WebsiteLayout/LessonLayout2/LessonLayout2";
import LessonLayout3 from "./Components/Courses/WebsiteLayout/LessonLayout3/LessonLayout3";
import LessonLayout4 from "./Components/Courses/WebsiteLayout/LessonLayout4/LessonLayout4";

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
            <Route path="2" element={<LessonHTML2 />} />
            <Route path="3" element={<LessonHTML3 />} />
            <Route path="4" element={<LessonHTML4 />} />
          </Route>
          <Route path="CSS">
            <Route index element={<MainCSS />} />
            <Route path="1" element={<LessonCSS1 />} />
            <Route path="2" element={<LessonCSS2 />} />
            <Route path="3" element={<LessonCSS3 />} />
            <Route path="4" element={<LessonCSS4 />} />
          </Route>
          <Route path="Layout">
            <Route index element={<MainLayout />} />
            <Route path="1" element={<LessonLayout1 />} />
            <Route path="2" element={<LessonLayout2 />} />
            <Route path="3" element={<LessonLayout3 />} />
            <Route path="4" element={<LessonLayout4 />} />
          </Route>

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
