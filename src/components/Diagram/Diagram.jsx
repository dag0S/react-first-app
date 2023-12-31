import './Diagram.css';
import DiagramBar from '../DiagramBar/DiagramBar';

const Diagram = ({ dataSets }) => {
  const dataSetsValue = dataSets.map(dataSet => dataSet.value);
  const maxMonthCosts = Math.max(...dataSetsValue);

  return (
    <div className="diagram">
      {dataSets.map(dataSet => (
        <DiagramBar
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
          key={dataSet.label}
        />
      ))}
    </div>
  );
};
export default Diagram;
