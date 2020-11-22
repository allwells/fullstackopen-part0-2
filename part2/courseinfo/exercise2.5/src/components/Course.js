import React from "react";

const Header1 = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Header2 = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content1 = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
      <Part part={course.parts[3]} />
    </div>
  );
};

const Content2 = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header1 course={course[2]} />
      <Header2 course={course[0]} />
      <Content1 course={course[0]} />
      <Total course={course[0]} />
      <Header2 course={course[1]} />
      <Content2 course={course[1]} />
      <Total course={course[1]} />
    </div>
  );
};

export default Course;
