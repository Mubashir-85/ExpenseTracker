import React from "react";

function ExpenseList({ items, subTotal, Remove }) {
  return (
    <>
    <h2
    className="text-xl font-semibold text-gray-600 mb-3 text-left mt-10"

    >Expenses</h2>
      {items.map((item, index) => (
        <div className="flex justify-between items-center bg-white border border-gray-200 shadow-sm p-3 rounded-xl mb-3 hover:shadow-md transition
"
>
          <div className="bg-gray-400 text-white px-4 py-1 rounded font-semibold shadow"
 key={index}>
            {item.title} - ₹{item.amount}
          </div>
          <div className="bg-red-500 hover:bg-red-600 text-white px-3 py-1  rounded-lg font-bold shadow transition"
>
            <button className="w-full" onClick={() => Remove(index)}>
              X
            </button>
          </div>
        </div>
      ))}
      <div className="mt-8 text-lg font-bold bg-gray-100 p-3 rounded-lg shadow-sm"
>Total: ₹{subTotal}</div>
    </>
  );
}

export default ExpenseList;
