import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./Account";
import { Category } from "./Category";
import { Plannedtransaktions } from "./Plannedtransaktions";

@Index("fk_Transaktion_Account1_idx", ["accountIdAccount"], {})
@Index("fk_Transaktion_Category1_idx", ["categoryIdCategory"], {})
@Entity("Transaktion", { schema: "mydb" })
export class Transaktion {
  @PrimaryGeneratedColumn({ type: "int", name: "idTransaktion" })
  idTransaktion: number;

  @Column("float", { name: "amount", precision: 12 })
  amount: number;

  @Column("varchar", { name: "description", nullable: true, length: 45 })
  description: string | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("enum", { name: "type", nullable: true, enum: ["income", "expends"] })
  type: "income" | "expends" | null;

  @Column("int", { name: "Category_idCategory" })
  categoryIdCategory: number;

  @Column("int", { name: "Account_idAccount" })
  accountIdAccount: number;

  @ManyToOne(() => Account, (account) => account.transaktions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Account_idAccount", referencedColumnName: "idAccount" },
  ])
  accountIdAccount2: Account;

  @ManyToOne(() => Category, (category) => category.transaktions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Category_idCategory", referencedColumnName: "idCategory" },
  ])
  categoryIdCategory2: Category;

  @OneToMany(
    () => Plannedtransaktions,
    (plannedtransaktions) => plannedtransaktions.transaktionIdTransaktion2
  )
  plannedtransaktions: Plannedtransaktions[];
}
