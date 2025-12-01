import React from 'react'

function Input() {
  return (
    <div>
        <form action="">
            <div className='flex flex-col items-center mt-5 gap-4'>
                <input type="text" placeholder='Enter Expense' className='border border-blue-400 rounded p-1 md:w-[70%] w-[90%] '/>
                <input type="text" placeholder='Enter Amount' className='border border-blue-400 rounded p-1 md:w-[70%] w-[90%]' />
                <button className='bg-blue-400 text-white rounded px-3 py-1 md:w-[60%] w-[50%] '>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default Input