import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Transaktion } from "./Transaktion";

@Index(
  "fk_plannedtransaktions_Transaktion1_idx",
  ["transaktionIdTransaktion"],
  {}
)
@Entity("plannedtransaktions", { schema: "mydb" })
export class Plannedtransaktions {
  @Column("int", { primary: true, name: "idtable1" })
  idtable1: number;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("date", { name: "planneddate", nullable: true })
  planneddate: string | null;

  @Column("int", { name: "Transaktion_idTransaktion" })
  transaktionIdTransaktion: number;

  @ManyToOne(
    () => Transaktion,
    (transaktion) => transaktion.plannedtransaktions,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "Transaktion_idTransaktion",
      referencedColumnName: "idTransaktion",
    },
  ])
  transaktionIdTransaktion2: Transaktion;
}
