import './CostList.css';
import CostItem from '../CostItem/CostItem';

const CostList = ({ costs }) => {
  if (costs.length === 0)
    return <h2 className="cost-list__fallback">В этом году расходов нет</h2>;

  return (
    <ul className="cost-list">
      {costs.map(cost => (
        <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          key={cost.id}
        />
      ))}
    </ul>
  );
};

export default CostList;
