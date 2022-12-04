import React from 'react'

function Expense(props){

  


return(
    <div>
        <div><b>Name:</b> <b><em>{props.name}</em></b></div>
        <div><b>Amount:</b> <b><em>{props.amount}</em></b></div>
        <div><b>spendDate:</b> <b><em>{props.cusdate.toString()}</em></b></div>
        <div><b>category:</b> <b><em>{props.category}</em></b></div>
    </div>
)


}
export default Expense;