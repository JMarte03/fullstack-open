import { useState } from "react";

const Statistics = ({ good, neutral, bad, collected, average }) => {
  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>Collected feedback: {collected(good, neutral, bad)}</p>
      <p>Average: {average(good, neutral, bad)}</p>
      <p>Positive feedback: {(good / collected(good, neutral, bad)) * 100}%</p>
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  const calculateCollected = (n1, n2, n3) => {
    return n1 + n2 + n3;
  };

  const calculateAverage = (n1, n2, n3) => {
    return (n1 + n3 * -1) / (n1 + n2 + n3);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={calculateAverage}
        collected={calculateCollected}
      />
    </div>
  );
}

export default App;
