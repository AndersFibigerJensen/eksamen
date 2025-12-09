import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Index("fk_Budget_Category1_idx", ["categoryIdCategory"], {})
@Index("fk_Budget_User1_idx", ["userIdUser"], {})
@Entity("Budget", { schema: "mydb" })
export class Budget {
  @PrimaryGeneratedColumn({ type: "int", name: "idBudget" })
  idBudget: number;

  @Column("float", { name: "amount", precision: 12 })
  amount: number;

  @Column("date", { name: "budget_date", nullable: true })
  budgetDate: string | null;

  @Column("int", { name: "Category_idCategory" })
  categoryIdCategory: number;

  @Column("int", { name: "User_idUser" })
  userIdUser: number;

  @ManyToOne(() => Category, (category) => category.budgets, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "Category_idCategory", referencedColumnName: "idCategory" },
  ])
  categoryIdCategory2: Category;

  @ManyToOne(() => User, (user) => user.budgets, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "User_idUser", referencedColumnName: "idUser" }])
  userIdUser2: User;
}
