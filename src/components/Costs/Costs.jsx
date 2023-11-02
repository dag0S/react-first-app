import './Costs.css';
import Card from '../Card/Card';
import CostsFilter from '../CostsFilter/CostsFilter';
import CostList from '../CostList/CostList';
import CostsDiagram from '../CostsDiagram/CostsDiagram';
import { useState } from 'react';

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    cost => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  );
};

export default Costs;
