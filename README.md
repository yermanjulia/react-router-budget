Budget & Expense Tracker Application
This application uses React and provides functionalities for managing budgets and expenses. It includes features for adding, deleting, and viewing budgets and expenses.

Table of Contents
Features
Components
Getting Started
Contributing
Features
Delete Budget
Allows users to delete a budget based on its ID.
Deletes all expenses associated with the budget being deleted.
Shows a success toast message upon successful deletion.

Logout
Deletes the user and associated budgets and expenses.
Shows a success toast message upon successful logout.

Components
AddBudgetForm
A React component that allows users to add a new budget.
Uses React hooks for form handling and side effects.
Posts the new budget using react-router-dom's useFetcher hook.
AddExpenseForm
Allows users to add a new expense.
Automatically associates the expense with a budget if only one exists.
It also uses react-router-dom's useFetcher hook for posting data.
Table
Takes a list of expenses as props and displays them in tabular form.
It uses a flag to determine whether to display the associated budget name.
Main
Main layout component that houses other components.
Fetches and displays the username.
BudgetPage
Fetches a particular budget and its associated expenses.
Displays the budget and expenses using BudgetItem and Table components.
Allows the addition of new expenses to the budget.

ExpensesPage
Fetches and displays all expenses.
It supports deleting expenses.

Getting Started
To get a local copy up and running, follow these simple steps:
# Clone the repository
git clone https://github.com/yermanjulia/react-router-budget.git

# Navigate into the project directory
cd your-project-name

# Install dependencies
npm install

# Start the development server
npm start

Contributing
Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
