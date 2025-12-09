import { SelectQueryBuilder } from "typeorm/query-builder/SelectQueryBuilder.js";
import { Category } from "../output/entities/Category";
export declare const sortorder: (QueryBuilder: SelectQueryBuilder<Category>, sortorder: string | undefined) => void;
export declare const GetCategories: (req: any) => Promise<{
    count: number;
    results: {
        budgets: import("../output/entities/Budget").Budget[];
        transaktions: import("../output/entities/Transaktion").Transaktion[];
        idCategory: number;
        name: string;
        type: string;
    }[];
}>;
export declare const GetCategory: (Categoryid: number) => Promise<{
    transaktions: import("../output/entities/Transaktion").Transaktion[];
    budgets: import("../output/entities/Budget").Budget[];
    idCategory: number;
    name: string;
    type: string;
}>;
export declare const deleteCategory: (CategoryId: number) => Promise<void>;
export declare const createCategory: (CategoryData: Partial<Category>) => Promise<Category>;
export declare const updateCategory: (CategoryId: number, CategoryData: Partial<Category>) => Promise<Category>;
//# sourceMappingURL=CategoryService.d.ts.map