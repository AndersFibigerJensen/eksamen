import { Controller } from "tsoa";
import type { Request as ExRequest } from "express";
import { Transaktion } from "../output/entities/Transaktion";
export declare class transaktionController extends Controller {
    getTransaktions(req: ExRequest): Promise<Transaktion[]>;
    getTransaktion(id: string): Promise<Transaktion>;
    PostBudget(transaktiondata: Partial<Transaktion>): Promise<Transaktion>;
    PutBudget(id: number, transaktiondata: Partial<Transaktion>): Promise<Transaktion>;
    Delete(id: number): Promise<void>;
}
//# sourceMappingURL=transaktionController.d.ts.map