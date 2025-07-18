const Header = (props) => {
  console.log(props);
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercices}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.course.parts[0].name} exercices={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercices={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercices={props.course.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>;
};

function App() {
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
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
