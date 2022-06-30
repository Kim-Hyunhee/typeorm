import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "nepp-insta.co4gfm17ihoe.us-east-2.rds.amazonaws.com",
  port: 3306,
  username: "admin",
  password: "12341234",
  database: "insta",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
