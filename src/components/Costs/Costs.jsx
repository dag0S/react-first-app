import "./Costs.css";
import CostItem from "../CostItem/CostItem";

function Costs({ cost }) {
  return (
    <div className="costs">
      <CostItem
        date={cost[0].date}
        description={cost[0].description}
        amount={cost[0].amout}
      />
      <CostItem
        date={cost[1].date}
        description={cost[1].description}
        amount={cost[1].amout}
      />
      <CostItem
        date={cost[2].date}
        description={cost[2].description}
        amount={cost[2].amout}
      />
    </div>
  );
}

export default Costs;
