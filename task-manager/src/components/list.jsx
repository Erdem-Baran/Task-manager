import Warning from "./warning";
export default function List({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list container pt-1">
      {items.length === 0 && <Warning />}
      {items.map((item) => (
        <li
          className="border rounded p-1 mb-2  d-flex align-items-center justify-content-between"
          key={item.id}
        >
          <input
            type="checkbox"
            className="form-check-input p-2 m-2"
            checked={item.completed}
            onChange={() => onUpdateItem(item.id)}
          />
          <div
            className="item-name"
            style={item.completed ? { textDecoration: "line-through" } : {}}
          >
            {item.name}
          </div>
          <i
            className="fs-3 bi bi-x text-danger delete-icon"
            onClick={() => onDeleteItem(item.id)}
          ></i>
        </li>
      ))}
    </div>
  );
}
