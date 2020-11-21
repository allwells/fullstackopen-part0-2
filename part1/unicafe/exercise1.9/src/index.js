import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  if ((props.good || props.neutral || props.bad) === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <p>
        {props.textGood} {props.good}
      </p>
      <p>
        {props.textNeutral} {props.neutral}
      </p>
      <p>
        {props.textBad} {props.bad}
      </p>
      <p>
        {props.textAll} {props.all}
      </p>
      <p>
        {props.textAverage} {props.average}
      </p>
      <p>
        {props.textPositive} {props.positive}
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
