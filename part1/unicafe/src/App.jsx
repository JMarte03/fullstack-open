import { useState } from "react";

const Statistics = ({ good, neutral, bad, collected, average }) => {
  if (collected(good, neutral, bad) == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="Collected feedback" value={collected(good, neutral, bad)} />
          <StatisticsLine text="Average" value={average(good, neutral, bad)} />
          <StatisticsLine text="Positive feedback" value={`${(good / collected(good, neutral, bad)) * 100}%`} />
        </tbody>
      </table>
    </>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
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
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
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