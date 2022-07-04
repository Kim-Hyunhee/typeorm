import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseTimeEntity {
  @CreateDateColumn({ type: "datetime" })
  created_at!: Date;

  @UpdateDateColumn({ type: "datetime" })
  updated_at!: Date;
}
