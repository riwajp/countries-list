import "./App.css";
import List from "./components/List";

function App() {
  const list_items = [
    {
      key: 1,
      name: "Nepal",
      population: 29000000,
      language: "Nepali",
      pci: 1196,
    },
    {
      key: 2,
      name: "India",
      population: 190382761,
      language: "Hindi",
      pci: 2200,
    },
    {
      key: 3,
      name: "China",
      population: 200382761,
      language: "Mandarin",
      pci: 3000,
    },
  ];
  return (
    <div className="App">
      <List items={list_items} />
    </div>
  );
}

export default App;
