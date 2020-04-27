import React from "react";
import Person from "./Person";

function NameList() {
  var persons = [
    {
      id: 1,
      name: "Krishnanand",
      age: 19,
      skills: "Flutter,Linux,React",
    },
    {
      id: 2,
      name: "Robert",
      age: 21,
      skills: "NodeJs",
    },
    {
      id: 1,
      name: "Pangai",
      age: 24,
      skills: "Golang",
    },
  ];

  var personRenderList = persons.map(person => <Person key={person.id} person={person} />);
  return <div>{personRenderList}</div>;
}

export default NameList;
