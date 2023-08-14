const generateRandomColor = () => {
  const existingBudgetLenght = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLenght * 34} 65% 50%`;
};
// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//create budget
export const createBudget = ({}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
    // color:
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.springify([...existingBudgets, newItem])
  );
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
