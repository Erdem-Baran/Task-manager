import { useState } from "react";

export default function Input({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name: name,
      completed: false,
    };
    onAddItem(newItem);
    setName("");
  }
  return (
    <form
      className="input-group border-radius position-relative top-1 start-50 translate-middle mb-4 p-5"
      style={{
        maxWidth: "500px",
        zIndex: 1000,
        top: "10vh",
      }}
      onSubmit={handleFormSubmit}
    >
      <input
        className="form-control "
        id="item_name"
        type="text"
        placeholder="Add a new task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">
        <i className="bi bi-plus"></i>
      </button>
    </form>
  );
}
