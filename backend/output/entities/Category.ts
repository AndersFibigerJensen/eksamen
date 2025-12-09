import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Budget } from "./Budget";
import { Transaktion } from "./Transaktion";

@Entity("Category", { schema: "mydb" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "idCategory" })
  idCategory: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("varchar", { name: "type", length: 45 })
  type: string;

  @OneToMany(() => Budget, (budget) => budget.categoryIdCategory2)
  budgets: Budget[];

  @OneToMany(
    () => Transaktion,
    (transaktion) => transaktion.categoryIdCategory2
  )
  transaktions: Transaktion[];
}
