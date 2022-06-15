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
      cities: [
        {
          key: 1,
          value: "Kathmandu",
          places: [
            { key: 1, value: "kalopul" },
            { key: 2, value: "naxal" },
          ],
        },
        {
          key: 2,
          value: "Pokhara",
          places: [
            { key: 1, value: "Maligaun" },
            { key: 2, value: "Hadigaun" },
          ],
        },
      ],
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
  const schema = {
    countries: [
      { name: "value", type: "text" },
      { name: "population", type: "number" },
      { name: "language", type: "text" },
      { name: "pci", type: "number" },
    ],
    cities: [{ name: "value", type: "text" }],
    places: [{ name: "value", type: "text" }],
  };
  const default_values = {
    countries: list_items[0],
    cities: list_items[0].cities[0],
    places: list_items[0].cities[0].places[0],
  };
  return (
    <div className="App">
      <List
        title="countries"
        items={items}
        setItems={setItems}
        schema={schema}
        default_values={default_values}
      />
    </div>
  );
}

export default App;
