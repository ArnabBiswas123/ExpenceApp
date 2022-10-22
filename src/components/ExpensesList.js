import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpenseList=(props)=>{
   if(props.item.length===0)
    return <h2 className='expenses-list__fallback'>No Expense Here</h2>
    return <ul className='expenses-list'>
    {props.item.map(elment_expenses => <ExpenseItem
        key={elment_expenses.id}
        title={elment_expenses.title}
        amount={elment_expenses.amount}
        date={elment_expenses.date} />)}
        </ul>
}
export default ExpenseList;