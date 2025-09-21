import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/list";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleUpdateItem(id) {
    const UpdateItems = (items) =>
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      );
    setItems(UpdateItems);
  }

  return (
    <>
      <Header />
      <Input onAddItem={handleAddItem} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
    </>
  );
}

export default App;
