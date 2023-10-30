import CostForm from '../CostForm/CostForm';
import './NewCost.css';

const NewCost = ({ onAddCost }) => {
  const saveCostDataHandler = inputCostDate => {
    const costDate = {
      ...inputCostDate,
      id: Math.random().toString(),
    };
    onAddCost(costDate);
  };

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
