import React, { useContext } from "react";

const BudgetsContext = React.createContext();

export const useBudgets = () => {
    return useContext(BudgetsContext)
};


export const BudgetsProvider = ({ children }) => {
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