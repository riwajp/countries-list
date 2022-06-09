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
      cities: [
        {
          key: 1,
          value: "Kathmandu",
          population: 3000000,
          language: "Nepali",
        },
        {
          key: 2,
          value: "Pokhara",
          population: 1000000,
          language: "Nepali",
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
      cities: [
        {
          key: 1,
          value: "Mumbai",
          population: 212323123,
          language: "Hindi",
        },
        {
          key: 2,
          value: "Banglore",
          population: 3123452,
          language: "Hindi",
        },
      ],
    },
    {
      key: 3,
      value: "China",
      population: 200382761,
      language: "Mandarin",
      pci: 3000,
      cities: [
        {
          key: 1,
          value: "Beijing",
          population: 23123243,
          language: "Chinese",
        },
        {
          key: 2,
          value: "Shanghai",
          population: 12123212,
          language: "Chinese",
        },
      ],
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
