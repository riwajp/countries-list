import "./App.css";
import List from "./components/List";

function App() {
  const deleteBtn = (item, deleteItem) => {
    return (
      <button
        className="button button--delete--right"
        onClick={() => {
          deleteItem(item);
        }}
      >
        Delete
      </button>
    );
  };
  const editBtn = (toogleEditMode, edit_mode, saveItem, item) => {
    return (
      <button
        className="button button--edit--right"
        onClick={() => {
          toogleEditMode();
          if (edit_mode) {
            saveItem(item);
          }
        }}
      >
        {edit_mode ? "Save" : "Edit"}
      </button>
    );
  };

  const list_items = [
    { name: "Nepal", ppulation: 29000000, language: "Nepali", pci: 1196 },
    { name: "India", ppulation: 190382761, language: "Hindi", pci: 2200 },
    {
      name: "China",
      ppulation: 200382761,
      language: "Mandarin",
      pci: 3000,
    },
  ];
  return (
    <div className="App">
      <List editBtn={editBtn} deleteBtn={deleteBtn} items={list_items} />
    </div>
  );
}

export default App;
