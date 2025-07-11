import React from "react";

// Renders the course name
const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

// Renders the course details (maps through the parts)
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}/>
      ))}
    </div>
  );
};

// A sigle part
const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
}

// Calculates the sum of all the exercises properties in each part with the reduce method
const Total = ({ parts }) => {
    const total = parts.reduce((acc, part) => {
        // console.log(part.exercises);
        return acc + part.exercises
    }, 0)
    return <p>Number of exercises {total}</p>
}

// The whole course component
const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
