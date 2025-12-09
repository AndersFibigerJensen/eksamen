import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";
import { Budget } from "./Budget";
import { Goal } from "./Goal";

@Entity("User", { schema: "mydb" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "idUser" })
  idUser: number;

  @Column("varchar", { name: "username", length: 45 })
  username: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @Column("varchar", { name: "email", length: 45 })
  email: string;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @OneToMany(() => Account, (account) => account.userIdUser2)
  accounts: Account[];

  @OneToMany(() => Budget, (budget) => budget.userIdUser2)
  budgets: Budget[];

  @OneToMany(() => Goal, (goal) => goal.userIdUser2)
  goals: Goal[];
}
