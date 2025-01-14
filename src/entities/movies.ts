import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column()
  released: Date;

  @Column()
  duration: string;
}
