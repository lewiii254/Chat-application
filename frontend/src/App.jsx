import { useState } from "react";
import MyButton from "./components/button";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  // const Person = {
  //   name: "John",
  //   age: 30,
  //   city: "New York",
  // };
  const products = [
    {
      title: "Apple",
      id: 1,
    },
    {
      title: "Banana",
      id: 2,
    },
    {
      title: "Oranges",
      id: 3,
    },
  ];
  return (
    <div>
      {/* <h1>My name is {Person.name}</h1> */}

      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}

      <MyButton handleClick={handleClick} count={count} />
      <MyButton handleClick={handleClick} count={count} />
    </div>
  );
};

export default App;