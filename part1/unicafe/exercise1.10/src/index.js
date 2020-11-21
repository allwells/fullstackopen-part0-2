import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Statistics = (props) => {
  if ((props.good || props.neutral || props.bad) === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <Statistic text={props.textGood} value={props.good} />
      <Statistic text={props.textNeutral} value={props.neutral} />
      <Statistic text={props.textBad} value={props.bad} />
      <Statistic text={props.textAll} value={props.all} />
      <Statistic text={props.textAverage} value={props.average} />
      <Statistic text={props.textPositive} value={props.positive} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <h1>statistics</h1>
      <div>
        <Statistics
          textGood={"good"}
          good={good}
          textNeutral={"neutral"}
          neutral={neutral}
          textBad={"bad"}
          bad={bad}
          textAll={"all"}
          all={good + neutral + bad}
          textAverage={"average"}
          average={(good + neutral + bad) / 3}
          textPositive={"positive"}
          positive={((good + neutral) / 100) * 2 + "%"}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
