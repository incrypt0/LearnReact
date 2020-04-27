import React from "react";

function Person({person}) {
  return (
    <div>
      <h1>
        Iam {person.name}. Iam {person.age} .I Know {person.skills}{" "}
      </h1>
    </div>
  );
}

export default Person;
