import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.score}
      </p>
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
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <div>
        <Statistics text={"good"} score={good} />
        <Statistics text={"neutral"} score={neutral} />
        <Statistics text={"bad"} score={bad} />
        <Statistics text={"all"} score={good + neutral + bad} />
        <Statistics text={"average"} score={(good + neutral + bad) / 3} />
        <Statistics
          text={"positive"}
          score={((good + neutral) / 100) * 2 + "%"}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
