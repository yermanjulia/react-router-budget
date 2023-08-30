//rrd imports
import { useLoaderData } from "react-router-dom";

export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

export const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return <div>ExpensesPage</div>;
};
