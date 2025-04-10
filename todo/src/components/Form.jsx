import React from "react";

const Form = () => {
  const handleSubmit = (event) => {
    event.prevntDefault();
    //   reset form
    event.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        {" "}
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="write you next task"
        />
      </label>
      <button>
        <span className="visually-hidden">submit</span>
        <svg>
          <path d="" />
        </svg>
      </button>
    </form>
  );
};

export default Form;
