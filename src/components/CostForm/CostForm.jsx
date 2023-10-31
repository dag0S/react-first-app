import { useState } from 'react';
import './CostForm.css';

const CostForm = ({ onSaveCostData }) => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const nameChangeHandler = event => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = event => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setInputDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const costDate = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    onSaveCostData(costDate);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="name">Название</label>
          <input
            type="text"
            id="name"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="sum">Сумма</label>
          <input
            type="number"
            id="sum"
            value={inputAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="date">Дата</label>
          <input
            type="date"
            id="date"
            value={inputDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2023-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
