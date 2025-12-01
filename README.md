# React + Vite

Expense Tracker

This is a simple Expense Tracker built using React. It allows users to add expenses, display them in a list, calculate the total amount spent, and remove items when needed. The project is designed to help beginners understand component structure, props, state management, and basic data handling in React.


Features

· Add new expenses with a title and amount

· Display all expenses in a clean list

· Automatically calculate and update the total expense

· Remove an expense from the list

· Component-based folder structure

· Built with React hooks such as useState and useRef



Tech Stack

· React

· JavaScript

· Tailwind CSS (for styling)

· Vite (for fast development environment)




How It Works
Adding an Expense

Users can enter a title and an amount in the input fields and click "Add Expense".
The parent component (App.jsx) receives the new expense and updates the state.

Displaying the Expense List

The ExpenseList component receives the array of expenses via props and displays each item.

Deleting an Expense

Each item in the list has a "Delete" button. Clicking it triggers a delete function in the parent component, updating the state.

Calculating Total

The total is automatically calculated by summing all expense amounts using JavaScript's reduce() method.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
