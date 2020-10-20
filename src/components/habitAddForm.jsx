import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleAdd = (event) => {
    event.preventDefault();

    const name = this.inputRef.current.value;
    props.onAdd(name);
    formRef.current.reset();
  };

  console.log("habitAddForm");
  return (
    <form ref={formRef} className="add-form" onSubmit={handleAdd}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef}
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
