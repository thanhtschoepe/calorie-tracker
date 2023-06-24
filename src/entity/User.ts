import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity("users")
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  hash: string;
}
