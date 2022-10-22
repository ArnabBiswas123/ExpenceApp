import './ExpenseItem.css';
import Card from './card.js'
import ExpenseDate from './ExpenseDate';
// import './card.css'
// import React,{ useState } from "react"
 function ExpenseItem(item){
    // let title=item.title;
    // const [title,settitle]=useState(item.title);
    // const clickhandler=()=>{
    //    settitle('Updated!!')
    //     console.log(title)
    // }
    // console.log('Expense item call')
    // const expensedate=new Date(2022,8,10)
    // const expensetitle='Car Insurense'
    // const expenseprice=294.65
    // const month=item.date.toLocaleString('en-US',{month: 'long'});
    // const day=item.date.toLocaleString('en-US',{day: '2-digit'});
    // const year=item.date.getFullYear();
    return (<li>
    <Card className="expense-item">
        {/* <div>
        <div >{month}</div>
        <div >{year}</div>
        <div >{day}</div>
        </div> */}
        <ExpenseDate date={item.date}/>
        <div className="expense-item__description">
            <h2>{item.title}</h2>
            {/* <h2>{title}</h2> */}
            <div className="expense-item__price">${item.amount}</div>
        </div>
        {/* <button onClick={()=>{console.log('clicked')}}>change title</button> */}
        {/* <button onClick={clickhandler}>change title</button> */}
    </Card>
    </li>)
}
export default ExpenseItem;