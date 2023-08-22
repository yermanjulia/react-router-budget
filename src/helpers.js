const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.lenght ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

import { loadConfigFromFile } from "vite";

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
//create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return loadConfigFromFile.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};
// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
