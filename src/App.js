import "./App.css";
import List from "./components/List";
import { useState } from "react";
function App() {
  const list_items = [
    {
      key: 1,
      value: "Nepal",
      population: 29000000,
      language: "Nepali",
      pci: 1196,
    },
    {
      key: 2,
      value: "India",
      population: 190382761,
      language: "Hindi",
      pci: 2200,
      pci: 1196,
    },
    {
      key: 3,
      value: "China",
      population: 200382761,
      language: "Mandarin",
      pci: 3000,
    },
  ];

  const [items, setItems] = useState(list_items);
  const schema = [
    { name: "value", type: "text" },
    { name: "population", type: "number" },
    { name: "language", type: "text" },
    { name: "pci", type: "number" },
  ];
  return (
    <div className="App">
      <List
        title="Countries List"
        items={items}
        setItems={setItems}
        schema={schema}
      />
    </div>
  );
}

export default App;
