// import ExpenseItem from "./ExpenseItem";
import Card from "./card"
import './Expense.css'
import React, { useState } from 'react'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpensesList";
// import './card.css'

export default function Expenses(props) {
  const [year, setyear] = useState('2020')
  const changeyearhandler = newyear => {
    setyear(newyear);
  }
  // console.log(year)
  const yearfiltereditem = props.item.filter(elment_expenses => { return elment_expenses.date.getFullYear().toString() === year })
  // let expensecontent = <p>No Expenses are here</p>;
  // if (yearfiltereditem.length > 0)
  //   expensecontent = yearfiltereditem.map(elment_expenses => <ExpenseItem
  //     key={elment_expenses.id}
  //     title={elment_expenses.title}
  //     amount={elment_expenses.amount}
  //     date={elment_expenses.date} />);
  return (
    
      <Card className="expenses">
      <ExpensesFilter onchangeyear={changeyearhandler} />
      <ExpenseChart expenses={yearfiltereditem}/>
      <ExpenseList item={yearfiltereditem}/>
        {/* {props.item.map(elment_expenses => <ExpenseItem
      key={elment_expenses.id}
      title={elment_expenses.title}
      amount={elment_expenses.amount}
      date={elment_expenses.date} />)} */}
        {/* {yearfiltereditem.length === 0 ? <p>No Expenses are here</p> : yearfiltereditem.map(elment_expenses => <ExpenseItem
          key={elment_expenses.id}
          title={elment_expenses.title}
          amount={elment_expenses.amount}
          date={elment_expenses.date} />)} */}
        {/* {expensecontent} */}
        {/* {yearfiltereditem.length === 0 && <p>No Expenses are here</p>}
        {yearfiltereditem.length >0  && yearfiltereditem.map(elment_expenses => <ExpenseItem
          key={elment_expenses.id}
          title={elment_expenses.title}
          amount={elment_expenses.amount}
          date={elment_expenses.date} />)} */}
        {/* {yearfiltereditem.map(elment_expenses => <ExpenseItem
      key={elment_expenses.id}
      title={elment_expenses.title}
      amount={elment_expenses.amount}
      date={elment_expenses.date} />)} */}
        {/* <ExpenseItem title={props.item[0].title}
//                  amount={props.item[0].amount}
//                  date={props.item[0].date}/>
//     <ExpenseItem title={props.item[1].title}
//                  amount={props.item[1].amount}
//                  date={props.item[1].date}/>
//     <ExpenseItem title={props.item[2].title}
//                  amount={props.item[2].amount}
//                  date={props.item[2].date}/>
//     <ExpenseItem title={props.item[3].title}
//                  amount={props.item[3].amount}
//                  date={props.item[3].date}/> */}
      </Card>
    )
};
