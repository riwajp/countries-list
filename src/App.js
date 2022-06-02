import "./App.css";
import List from "./components/List";

function App() {
  console.log("APP");

  const deleteBtn = (item, deleteItem) => {
    return (
      <button
        className="button button--delete--right"
        onClick={() => deleteItem(item)}
      >
        Delete
      </button>
    );
  };
  const editBtn = (editModeOn, editModeOff, edit_mode) => {
    return (
      <button
        className="button button--edit--right"
        onClick={() => {
          if (!edit_mode) {
            editModeOn();
          } else {
            editModeOff();
          }
        }}
      >
        {edit_mode ? "Save" : "Edit"}
      </button>
    );
  };

  return (
    <div className="App">
      <List
        items={[
          { name: "Nepal", ppulation: 29000000, language: "Nepali", pci: 1196 },
          { name: "India", ppulation: 190382761, language: "Hindi", pci: 2200 },
          {
            name: "China",
            ppulation: 200382761,
            language: "Mandarin",
            pci: 3000,
          },
        ]}
        renderItem={(
          item,
          deleteItem,
          edit_mode,
          editModeOff,
          editModeOn,
          setItem
        ) => (
          <div className="list__item">
            {Object.keys(item).map((key) => (
              <div className="list__item__key" key={key}>
                {edit_mode ? (
                  <input
                    value={item[key]}
                    onChange={(e) =>
                      setItem({ ...item, [key]: e.target.value })
                    }
                    style={{ maxWidth: "100%" }}
                  />
                ) : (
                  item[key]
                )}
              </div>
            ))}
            {deleteBtn(item, deleteItem)}

            {editBtn(editModeOn, editModeOff, edit_mode)}
          </div>
        )}
        render={(render_items) => (
          <div className="list-container">
            <div className="list">
              <h1 className="list__title">Countries List</h1>
              {render_items}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default App;
