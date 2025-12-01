import React, { useState, useRef } from "react";

function Input({onAddExpense}) {
  const inputRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredInput = inputRef.current.value;
    const enteredAmount = amountRef.current.value;
    if (!enteredInput.trim() || !enteredAmount.trim()) {
      alert("Please fill all the fields before adding an expense!");
      return;
    }   
    const newexpense = {
        title: enteredInput,
        amount: enteredAmount 
    };
    console.log(newexpense)
    onAddExpense(newexpense)

    
    inputRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <>
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mt-5 gap-4">
          <input
            type="text"
            placeholder="Enter Expense"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            // className="border border-blue-400 rounded p-1 md:w-[70%] w-[90%] "
            ref={inputRef}
            />
          <input
            type="text"
            placeholder="Enter Amount"
            className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            // className="border border-blue-400 rounded p-1 md:w-[70%] w-[90%]"
            ref={amountRef}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white rounded px-3 py-1 md:w-[60%] w-[55%] "
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
    
    </>
  );
}

export default Input;
