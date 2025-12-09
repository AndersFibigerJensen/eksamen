import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("fk_Goal_User1_idx", ["userIdUser"], {})
@Entity("Goal", { schema: "mydb" })
export class Goal {
  @PrimaryGeneratedColumn({ type: "int", name: "idGoal" })
  idGoal?: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("float", { name: "target_amount", nullable: true, precision: 12 })
  targetAmount: number | null;

  @Column("float", { name: "current_amount", nullable: true, precision: 12 })
  currentAmount: number | null;

  @Column("date", { name: "target_date", nullable: true })
  targetDate: string | null;

  @Column("varchar", { name: "status", nullable: true, length: 45 })
  status: string | null;

  @Column("int", { name: "User_idUser" })
  userIdUser: number;

  @ManyToOne(() => User, (user) => user.goals, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "User_idUser", referencedColumnName: "idUser" }])
  userIdUser2: User;
}
