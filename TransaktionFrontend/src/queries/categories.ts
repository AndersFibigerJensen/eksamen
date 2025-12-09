import { create } from "zustand";

 export interface CategoryQuery {
    sortorder?: string;
    page?: number;
    pagesize?: number;
 }

 interface Categories {
    categoryQuery: CategoryQuery;
    setSortOrder: (sortorder?: string) => void;
    setPage: (page?: number) => void;
    setPageSize: (pagesize?: number) => void;
 }

 const UseCategorylist = create<Categories>((set) => ({
    categoryQuery: {},

    setSortOrder: (sortorder) =>
        set((state) => ({
            categoryQuery: { ...state.categoryQuery, sortorder },
        })),

    setPage: (page) =>
        set((state) => ({
            categoryQuery: { ...state.categoryQuery, page },
        })),
        
    setPageSize: (pagesize) =>
        set((state) => ({
            categoryQuery: { ...state.categoryQuery, pagesize },
        })),
}))

export default UseCategorylist;
    

