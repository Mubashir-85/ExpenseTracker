import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (newexpense) => {
    setExpenses((prev) => [...prev, newexpense]);
  };

  const totalAmount = expenses.reduce((sum, item) => {
    return sum + Number(item.amount);
  }, 0);

  const removeItem = (indexToDelete) => {
    setExpenses((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <center className="border-blue-400 md:w-[30%] w-[70%] mx-auto mt-10 p-5 rounded shadow-lg bg-white ">
        <Header />
        <Input onAddExpense={addExpenseHandler} />
        <ExpenseList
          items={expenses}
          subTotal={totalAmount}
          Remove={removeItem}
        />
      </center>
    </>
  );
}

export default App;
