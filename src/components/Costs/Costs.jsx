import './Costs.css';
import CostItem from '../CostItem/CostItem';
import Card from '../Card/Card';
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {costs
        .filter(cost => cost.date.getFullYear().toString() === selectedYear)
        .map(cost => (
          <CostItem
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
            key={cost.id}
          />
        ))}
    </Card>
  );
};

export default Costs;
