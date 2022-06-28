import { Todo } from "../../App";

function Todos({
  newItem,
  newItemInput,
  items,
  setItems,
  query,
  status,
}: {
  newItem: string;
  newItemInput: any;
  items: Todo[];
  setItems: any;
  query: string;
  status: string;
}) {
  const handleChange = (e: any): void => {
    newItemInput(e.target.value);
  };

  const addNewTodo = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (newItem?.length > 0) {
      setItems([
        ...items,
        {
          text: newItem,
          done: false,
          edit: false,
          id: Math.random() * 10000,
        },
      ]);
    }
    newItemInput("");
  };

  const handleDone = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: Todo
  ): void => {
    setItems(
      items.map((i) => {
        if (i.id === item.id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return i;
      })
    );
  };

  const toggleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: Todo
  ): void => {
    setItems(
      items.map((i) => {
        if (i.id === item.id) {
          return {
            ...item,
            edit: !item.edit,
          };
        }
        return i;
      })
    );
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: Todo
  ): void => {
    setItems(items.filter((i) => i.id !== item.id));
  };

  const handleTextChange = (event: any, item: Todo): void => {
    setItems(
      items.map((i) => {
        if (i.id === item.id) {
          return {
            ...item,
            text: event.target.value,
          };
        }
        return i;
      })
    );
  };

  return (
    <div className="todos">
      <div className="add-to-do">
        <input
          value={newItem}
          onChange={handleChange}
          type="text"
          placeholder="Make new to-do..."
        />
        <button onClick={addNewTodo}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      <div className="todo-list">
        {items.map((item) => {
          if (
            (status === "all" ||
            (status === "not" && !item.done) ||
            (status === "done" && item.done) 
            ) &&
            item.text.toLowerCase().includes(query.toLowerCase())
            ) {
            return (
              <div key={item.id} className={`todo ${item.done ? "done" : ""}`}>
                {(!item.edit && <p>{item.text}</p>) || (
                  <input
                    value={item.text}
                    onChange={(event) => handleTextChange(event, item)}
                    type="text"
                  />
                )}
                <button
                  disabled={item.done}
                  onClick={(event) => toggleEdit(event, item)}
                  className="edit"
                >
                  {(item.edit && (
                    <span className="material-symbols-outlined">save</span>
                  )) || <span className="material-symbols-outlined">edit</span>}
                </button>
                <button
                  onClick={(event) => handleDelete(event, item)}
                  className="delete"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <button
                  onClick={(event) => handleDone(event, item)}
                  className="done"
                >
                  {(item.done && (
                    <span className="material-symbols-outlined">undo</span>
                  )) || <span className="material-symbols-outlined">done</span>}
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Todos;
