

function FinanceTracker({amount, setAmount, setType , type, totalIncome, totalExpense, totalBalance, handleTransition, transitions}){
    return(
        <div className="flex flex-col py-3 items-center justify-center bg-gray-100">

      <div className="flex flex-wrap justify-center gap-4 w-full max-w-xl">
        {/* Income Section */}
        <div className="p-4 bg-green-100 border border-green-300 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-green-700">Income</h2>
          <p className="text-green-800">{totalIncome}</p>
        </div>

        {/* Expense Section */}
        <div className="p-4 bg-red-100 border border-red-300 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-red-700">Expense</h2>
          <p className="text-red-800">{totalExpense}</p>
        </div>

        {/* Balance Section */}
        <div className={` ${totalBalance < 0 ? "bg-red-200 text-red-700" : "bg-blue-100 text-blue-700"} p-4 bg-blue-100 border border-blue-300 rounded-lg shadow-md`}>
          <h2 className="text-lg font-bold text-blue-700">Balance</h2>
          <p className={`text-lg `}>
          {totalBalance}
          </p>
        </div>
      </div>

      <div className="flex flex-col my-3 items-center justify-center p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="flex mt-3 space-x-3">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Add Amount"
            className="border border-purple-400 px-2 py-1 rounded-md focus:outline-none focus:border-purple-600"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-purple-400 px-2 py-1 rounded-md focus:outline-none focus:border-purple-600"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <button
            onClick={handleTransition}
            className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Submit
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Transition Details:</h2>
          {transitions.map((data , index) =>(
            <div key={index} className='flex gap-10 my-2'>
              <p> <strong>{index + 1}{")"}</strong> Amount: <strong>{data.amount}</strong></p>
              <p  >
                Type:  <span className={ ` ${data.type === "Income" ? "text-green-700" : "text-red-700"} "text-bold-700" `  } >
                  <strong>{data.type}</strong>  
                </span> 
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default FinanceTracker