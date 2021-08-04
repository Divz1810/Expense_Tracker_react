import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){
    const[isEditing, setIsEditing]= useState(false);

    function EditingEventHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler(){
        setIsEditing(false);
    }

    function saveExpenseDataHandler(enteredExpeneData){
        const expenseData={
            ...enteredExpeneData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    return(
        <div className= "new-expense">
            {!isEditing && <button onClick={EditingEventHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;