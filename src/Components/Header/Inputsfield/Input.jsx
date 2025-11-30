import React from 'react'

function Input() {
  return (
    <div>
        <form action="">
            <div className='m-4 flex flex-col md:max-w-[50%]' >
                <input type="text" placeholder='Enter Expense Title' className='border mx-2 md:p-1 rounded'/>
                <input type="number" placeholder='Enter Expense Amount' className='border mx-2 md:p-1 p-1 mt-5 rounded'/>
                <button className='bg-blue-400 text-white font-bold rounded mt-5 md:p-1 hover:bg-blue-600 mx-2'>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default Input