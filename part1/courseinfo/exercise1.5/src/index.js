import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.prt[0].name} exercise={props.prt[0].exercises} />
      <Part part={props.prt[1].name} exercise={props.prt[1].exercises} />
      <Part part={props.prt[2].name} exercise={props.prt[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises
        {props.exes[0].exercises +
          props.exes[1].exercises +
          props.exes[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content prt={course.parts} />
      <Total exes={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
