import React,{useState} from 'react'
import './Expenseform.css'
const Expenseform=(props)=>{
    const [expensetitle,settitle]=useState('');
    const [expenseamount,setamount]=useState('');
    const [expensedate,setdate]=useState('');
    const onsubmithandler=(event)=>{
        event.preventDefault();
        const expensedata={
            title:expensetitle,
            amount:expenseamount,
            date:new Date(expensedate)
        }
        props.onSaveExpenseForm(expensedata);
        settitle('');
        setamount('');
        setdate('');
        // console.log(expensedata)
    }
    // const [userInput,setUserInut]=useState({
    //     title:'',
    //     amount:'',
    //     date:''
    // });
    const titlechangehandler=(event)=>{
        settitle(event.target.value);
        // setUserInut({
        //     ...userInput,
        //     title:event.target.value
        // })
        // setUserInut((prevState)=>{
        //     return {...prevState,title:event.target.value}
        // })
        // console.log(title)
    }
    const amountchangeghandler=(event)=>{
         setamount(event.target.value);
        // setUserInut({
        //     ...userInput,
        //     amount:event.target.value
        // })
        // setUserInut((prevState)=>{
        //     return {...prevState,amount:event.target.value}
        // })
        // console.log(amount)
    }
    const datechangehandler=(event)=>{
        
         setdate(event.target.value);
        // setUserInut({
        //     ...userInput,
        // date:event.target.value
        // })
        // setUserInut((prevState)=>{
        //     return {...prevState,date:event.target.value}
        // })
        // console.log(date)
    }
    return <form onSubmit={onsubmithandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>title</label>
            <input type='text' onChange={titlechangehandler} value={expensetitle}/>
            </div>
        <div className='new-expense__control'>
            <label>amount</label>
            <input type='number'min='0.01' step='0.01' onChange={amountchangeghandler} value={expenseamount}/>
            </div>
        <div className='new-expense__control'>
            <label>date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={datechangehandler} value={expensedate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}
export default Expenseform;