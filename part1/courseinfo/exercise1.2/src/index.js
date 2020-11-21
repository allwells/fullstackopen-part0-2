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
      <Part part={props.prt} exercise={props.exe} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exe1 + props.exe2 + props.exe3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content prt={part1} exe={exercises1} />
      <Content prt={part2} exe={exercises2} />
      <Content prt={part3} exe={exercises3} />
      <Total exe1={exercises1} exe2={exercises2} exe3={exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
