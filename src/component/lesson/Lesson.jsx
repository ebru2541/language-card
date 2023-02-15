import React from "react";
import { data } from "../../helper/data.js";
import LessonCard from "../lessonCard/LessonCard.jsx";
import "./lesson.css"
const Lesson = () => {
  return (
    <div className="container">
      {data.map(({ id, name, age, image }) => (
        <LessonCard name={name} age={age} image={image} />
      ))}
    </div>
  );
};

export default Lesson;
