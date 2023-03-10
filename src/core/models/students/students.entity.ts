import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Students {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ nullable: false })
	firtsname!: string;

	@Column({ nullable: false })
	lastname!: number;

	@Column({ unique: true, nullable: false })
	phone!: number;

	@Column({ unique: true, nullable: false })
	email!: string;
}
