import { PrimaryColumn } from "typeorm";
import { BaseTimeEntity } from "./base-time";

export abstract class AutoIdEntity extends BaseTimeEntity {
  @PrimaryColumn()
  id!: number;
}
