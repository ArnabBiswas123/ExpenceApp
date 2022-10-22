import React from 'react';
import './newExpense.css'
import Expenseform from './Expenseform'
const newExpense=(props)=>{
   const onSaveExpenseFormhandler=(ExpenseFormData)=>{
    const newExpenseFormData={
        id:Math.random().toString(),
        ...ExpenseFormData
    };
    props.onSavenewExpense(newExpenseFormData) ;
    //Exporting newExpenseFormData
    // console.log(newExpenseFormData);
   }
        return <div className='new-expense'>
            <Expenseform onSaveExpenseForm={onSaveExpenseFormhandler}/>
        </div>
};
export default newExpense;
