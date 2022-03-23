import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from 'uuid';

const BudgetsContext = React.createContext();

export const useBudgets = () => {
    return useContext(BudgetsContext)
};

// {
//     id:
//     name:
//     max:
// }
// {
//     id:
//     budgetId:
//     amount:
//     description:
// }

export const BudgetsProvider = ({ children }) => {

    const [budgets, setBudgets] = useState([]);
    const [expenses, setexpenses] = useState([]);

    function getBudgetExpenses(budgetId) {
        return expenses.filter(exoense => expenses.budgetId === budgetId)
    }
    function addExpense() {

    }
    function addBudget() {

    }
    function deleteBudget() {

    }
    function deleteExpense() {

    }

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>{children}</BudgetsContext.Provider>
};