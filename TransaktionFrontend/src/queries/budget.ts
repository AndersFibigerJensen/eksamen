import { create } from "zustand";

export interface budgetQuery {
    sortorder?: string;
    userId?: number;
    categoryid?:number
    dateLow?: number;
    dateHigh?: number;
    pageSize?:number;
}

interface budget { 
    budgetQuery: budgetQuery;
    setUserId: (accountId?: number) => void;
    setDateLow: (DateLow?: number) => void;
    setDateHigh: (DateHigh?: number) => void;
    setCategory: (categoryid?:number)=> void; 
}

const useBudgetlist = create<budget>((set) => ({
    budgetQuery: {},

    setUserId: (userId) =>
        set((state) => ({
            budgetQuery: { ...state.budgetQuery, userId: userId },
        })),
    
    setDateLow: (dateLow) =>
        set((state) => ({
            budgetQuery: { ...state.budgetQuery, dateLow },
        })),
    setDateHigh: (dateHigh) =>
        set((state) => ({
            budgetQuery: { ...state.budgetQuery, dateHigh },
        })),
    setCategory: (categoryid) =>
        set((state)=>({
            budgetQuery: {...state.budgetQuery,categoryid}
        })) 
}))

export default useBudgetlist;