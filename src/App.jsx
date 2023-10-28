import Costs from "./components/Costs/Costs";

function App() {
  const cost = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amout: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amout: 2499.99,
    },
    {
      date: new Date(2021, 4, 1),
      description: "Шорты",
      amout: 10.89,
    },
  ];

  return (
    <div>
      <h1>Начнем изучение React</h1>
      <Costs cost={cost}/>
    </div>
  );
}

export default App;
