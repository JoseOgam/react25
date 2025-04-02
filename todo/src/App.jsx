import React from "react";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import Form from "./components/Form";
import TODOList from "./components/TODOList";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todo_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={[]} />
    </div>
  );
};

export default App;
