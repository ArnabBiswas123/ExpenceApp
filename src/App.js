import Expenses from "./components/Expenses.js";
import NewExpense from "./components/new expenses/newExpense.js";
import React,{useState} from "react"
const Dummyexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App=()=>{
 const [myexpenses,setexpenses] = useState(Dummyexpenses);
  const onSavenewExpensehandler=(newExpensedata)=>{
    console.log('App.js')
    console.log(newExpensedata);
    setexpenses((prevstate)=>{
      return [newExpensedata, ...prevstate];}
    );
    // setexpenses([newExpensedata,]
    // );
  }
  return (
    <div>
      <h2>Hare Krishna</h2>
     <NewExpense onSavenewExpense={onSavenewExpensehandler}></NewExpense>
     <Expenses item={myexpenses}></Expenses>
    </div>
  );
//  return React.createElement('div',{},React.createElement('h2',{},'Hare krishna'),React.createElement(Expenses,{item:expenses}))
}

export default App;
