import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const cost = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amout: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 25),
      description: 'MacBook',
      amout: 2499.99,
    },
    {
      id: 'c3',
      date: new Date(2021, 4, 1),
      description: 'Шорты',
      amout: 10.89,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost),
    console.log('app component')
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs cost={cost} />
    </div>
  );
};

export default App;
