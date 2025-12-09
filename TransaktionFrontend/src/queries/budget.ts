import { create } from "zustand";

export interface budgetQuery {
    sortorder?: string;
    userId?: number;
    categoryid?:number
    DateLow?: number;
    DateHigh?: number;
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
    
    setDateLow: (DateLow) =>
        set((state) => ({
            budgetQuery: { ...state.budgetQuery, DateLow },
        })),
    setDateHigh: (DateHigh) =>
        set((state) => ({
            budgetQuery: { ...state.budgetQuery, DateHigh },
        })),
    setCategory: (categoryid) =>
        set((state)=>({
            budgetQuery: {...state.budgetQuery,categoryid}
        })) 
}))

export default useBudgetlist;