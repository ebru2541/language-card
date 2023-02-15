import React from "react";
import "../lessonCard/lessonCard.css";
const LessonCard = ({ id, name, age, image }) => {
  return (
  
      <div className="kart">
        <div className="on-taraf kutu">
          <img src={image} width="230px" height="200px" alt="" />
        </div>
        <div className="arka-taraf kutu">
          <div className="bilgi">
            <h3>Lesson Name: {name}</h3>
            <h3>Lesson Hour: {age}</h3>
          </div>
        </div>
      </div>
  
  );
};

export default LessonCard;
