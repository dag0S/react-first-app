import { useState } from 'react';
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

  const closeFormHandler = () => {
    setContent(
      <button onClick={openFormHandler}>Добавить Новый Расход</button>
    );
  };

  const openFormHandler = () => {
    setContent(
      <CostForm
        onCloseForm={closeFormHandler}
        onSaveCostData={saveCostDataHandler}
      />
    );
  };

  const [content, setContent] = useState(
    <button onClick={openFormHandler}>Добавить Новый Расход</button>
  );

  return <div className="new-cost">{content}</div>;
};

export default NewCost;
