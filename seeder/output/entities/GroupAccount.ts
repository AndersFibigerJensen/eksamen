import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("GroupAccount", { schema: "mydb" })
export class GroupAccount {
  @PrimaryGeneratedColumn({ type: "int", name: "idGroupAccount" })
  idGroupAccount: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("float", { name: "saldo", precision: 12 })
  saldo: number;

  @ManyToMany(() => User, (user) => user.groupAccounts)
  @JoinTable({
    name: "User_has_GroupAccount",
    joinColumns: [
      {
        name: "GroupAccount_idGroupAccount",
        referencedColumnName: "idGroupAccount",
      },
    ],
    inverseJoinColumns: [
      { name: "User_idUser", referencedColumnName: "idUser" },
    ],
    schema: "mydb",
  })
  users: User[];
}
