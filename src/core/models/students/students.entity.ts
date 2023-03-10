import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Timestamp } from 'typeorm';

@Entity()
export class Students {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ nullable: false, length: 40 })
	firstname!: string;

	@Column({ nullable: false , length: 40 })
	lastname!: string;

	@Column({ unique: true, length: 40 })
	phone!: string;

	@Column({ unique: true, nullable: false })
	email!: string;

	@Column({type:"datetime"})
	datetime!: Date
	
	@CreateDateColumn({})
	timestamp!: Timestamp;

}
