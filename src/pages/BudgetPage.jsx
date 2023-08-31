//react router dom imports
import { useLoaderData } from "react-router-dom";

//helpers
import { getAllMatchingItems } from "../helpers";
import AddExpenseForm from "../components/AddExpenseForm";

//loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: "params.id",
  })[0];

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: "params.id",
  })[0];

  if (!budget) {
    throw new Error("the budget you're trying to find doesn't exist");
  }
  return { budget, expenses };
}

const BudgetPage = () => {
  const { budget } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1 className="h2">
        <span className="accent">{budget.name}</span>
        Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} />
      </div>
    </div>
  );
};

export default BudgetPage;
