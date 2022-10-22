import './ExpenseDate.css'
import React from "react"
export default function ExpenseDate(item){
    const month=item.date.toLocaleString('en-US',{month: 'long'});
    const day=item.date.toLocaleString('en-US',{day: '2-digit'});
    const year=item.date.getFullYear();
    return <div className='expense-date'>
        <div className='expense-date__month' >{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
}