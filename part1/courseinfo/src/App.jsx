const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return <p>{props.part} {props.exercices}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} exercices={props.parts[0].exercices} />
      <Part part={props.parts[1].part} exercices={props.parts[1].exercices} />
      <Part part={props.parts[2].part} exercices={props.parts[2].exercices} />
    </div>
  )
};

const Total = (props) => {
  return <p>Number of exercises {props.sum}</p>;
};

function App() {
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
      <Content
        parts={[
          { part: part1, exercices: exercises1 },
          { part: part2, exercices: exercises2 },
          { part: part3, exercices: exercises3 },
        ]}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
