import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";

function App() {
  const list_items = [
    {
      key: 1,
      value: "Nepal",
      population: 29000000,
      language: "Nepali",
      pci: 1196,
      cities: ["Kathmandu", "Pokhara"],
    },
    {
      key: 2,
      value: "India",
      population: 190382761,
      language: "Hindi",
      pci: 2200,
      pci: 1196,
      cities: ["Mumbai", "Delhi"],
    },
    {
      key: 3,
      value: "China",
      population: 200382761,
      language: "Mandarin",
      pci: 3000,
      pci: 1196,
      cities: ["Shanghai", "Beijing"],
    },
  ];
  return (
    <div className="App">
      <List title="Countries List" items={list_items} />
      <ListItem item={list_items[0]} />
    </div>
  );
}

export default App;
