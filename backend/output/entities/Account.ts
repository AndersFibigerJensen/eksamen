import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Transaktion } from "./Transaktion";

@Index("fk_Account_User1_idx", ["userIdUser"], {})
@Entity("Account", { schema: "mydb" })
export class Account {
  @PrimaryGeneratedColumn({ type: "int", name: "idAccount" })
  idAccount: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("float", { name: "saldo", precision: 12 })
  saldo: number;

  @Column("int", { name: "User_idUser" })
  userIdUser: number;

  @ManyToOne(() => User, (user) => user.accounts, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "User_idUser", referencedColumnName: "idUser" }])
  userIdUser2: User;

  @OneToMany(() => Transaktion, (transaktion) => transaktion.accountIdAccount2)
  transaktions: Transaktion[];
    User: any;
}
