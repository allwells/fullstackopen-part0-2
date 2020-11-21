import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = (props) => {
  return (
    <tbody>
      <tr>
        <td> {props.text} </td>
        <td> {props.value} </td>
      </tr>
    </tbody>
  );
};

const Statistics = (props) => {
  if ((props.good || props.neutral || props.bad) === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <Statistic text={"good"} value={props.good} />
      <Statistic text={"neutral"} value={props.neutral} />
      <Statistic text={"bad"} value={props.bad} />
      <Statistic text={"all"} value={props.good + props.neutral + props.bad} />
      <Statistic
        text={"average"}
        value={(props.good + props.neutral + props.bad) / 3}
      />
      <Statistic
        text={"positive"}
        value={((props.good + props.neutral) / 100) * 2 + "%"}
      />
    </table>
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
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
