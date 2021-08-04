import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import './AllExpenses.css';
import Card from '../card/Card.js';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const[filteredYear, setFilteredYear]= useState('2020');
  function filterChangeHandler(selectedYear){
     setFilteredYear(selectedYear);
  };


  //to make our year filter work hum nayi array bana re h jisme humne filter k through sirf vo entries rkhi hai jiska year matches to
  // the selected year 
  const filteredExpense= props.item.filter(expense =>{
    return expense.date.getFullYear().toString() ===filteredYear
  });

    return <li><Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

    <ExpensesChart expenses={filteredExpense} />

    {/* javascript way of using conditional operator. ==> thing after && will work if condition beofr && is true */}
    {/* {filteredExpense.length===0 && <p>No expense found</p>}
    {filteredExpense.length>0 &&
      filteredExpense.map((expense)=>(
       <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
     )) } */}

     {/* another method of conditional oper. ==> see expenseList component what is exactly hapeening*/}
     <ExpenseList item={filteredExpense}/>
    </Card>
    </li>
}

export default Expenses;