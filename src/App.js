import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "./redux/auth";

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

import LessonCSS1 from "./Components/Courses/CSS/LessonCSS1/LessonCSS1";
import LessonCSS2 from "./Components/Courses/CSS/LessonCSS2/LessonCSS2";
import LessonCSS3 from "./Components/Courses/CSS/LessonCSS3/LessonCSS3";
import LessonCSS4 from "./Components/Courses/CSS/LessonCSS4/LessonCSS4";

import LessonLayout1 from "./Components/Courses/WebsiteLayout/LessonLayout1/LessonLayout1";
import LessonLayout2 from "./Components/Courses/WebsiteLayout/LessonLayout2/LessonLayout2";
import LessonLayout3 from "./Components/Courses/WebsiteLayout/LessonLayout3/LessonLayout3";
import LessonLayout4 from "./Components/Courses/WebsiteLayout/LessonLayout4/LessonLayout4";

import LessonJS1 from "./Components/Courses/JavaScript/LessonJS1/LessonJS1";
import LessonJS2 from "./Components/Courses/JavaScript/LessonJS2/LessonJS2";
import LessonJS3 from "./Components/Courses/JavaScript/LessonJS3/LessonJS3";
import LessonJS4 from "./Components/Courses/JavaScript/LessonJS4/LessonJS4";

import LessonPHP1 from "./Components/Courses/PHP/LessonPHP1/LessonPHP1";
import LessonPHP2 from "./Components/Courses/PHP/LessonPHP2/LessonPHP2";
import LessonPHP3 from "./Components/Courses/PHP/LessonPHP3/LessonPHP3";
import LessonPHP4 from "./Components/Courses/PHP/LessonPHP4/LessonPHP4";
import TestHTML from "./Components/Courses/HTML/TestHTML/TestHTML";
import TestCSS from "./Components/Courses/CSS/TestCSS/TestCSS";
import TestJS from "./Components/Courses/JavaScript/TestJS/TestJS";
import TestLayout from "./Components/Courses/WebsiteLayout/TestLayout/TestLayout";
import TestPHP from "./Components/Courses/PHP/TestPHP/TestPHP";
import MainTest from "./Components/Courses/MainTest/MainTest";

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
          <Route path="GeneralTest">
            <Route index element={<MainTest />} />
          </Route>
          <Route path="HTML">
            <Route index element={<MainHTML />} />
            <Route path="1" element={<LessonHTML1 />} />
            <Route path="2" element={<LessonHTML2 />} />
            <Route path="3" element={<LessonHTML3 />} />
            <Route path="4" element={<LessonHTML4 />} />
            <Route path="test" element={<TestHTML />} />
          </Route>
          <Route path="CSS">
            <Route index element={<MainCSS />} />
            <Route path="1" element={<LessonCSS1 />} />
            <Route path="2" element={<LessonCSS2 />} />
            <Route path="3" element={<LessonCSS3 />} />
            <Route path="4" element={<LessonCSS4 />} />
            <Route path="test" element={<TestCSS />} />
          </Route>
          <Route path="Layout">
            <Route index element={<MainLayout />} />
            <Route path="1" element={<LessonLayout1 />} />
            <Route path="2" element={<LessonLayout2 />} />
            <Route path="3" element={<LessonLayout3 />} />
            <Route path="4" element={<LessonLayout4 />} />
            <Route path="test" element={<TestLayout />} />
          </Route>
          <Route path="JS">
            <Route index element={<MainJS />} />
            <Route path="1" element={<LessonJS1 />} />
            <Route path="2" element={<LessonJS2 />} />
            <Route path="3" element={<LessonJS3 />} />
            <Route path="4" element={<LessonJS4 />} />
            <Route path="test" element={<TestJS />} />
          </Route>
          <Route path="PHP">
            <Route index element={<MainPHP />} />
            <Route path="1" element={<LessonPHP1 />} />
            <Route path="2" element={<LessonPHP2 />} />
            <Route path="3" element={<LessonPHP3 />} />
            <Route path="4" element={<LessonPHP4 />} />
            <Route path="test" element={<TestPHP />} />
          </Route>
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
