import { encodeUrl } from "src/helper/urlEncoder";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//database schema for URL object
@Entity()
export class Url {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    link: string;

    @Column()
    short_link: string;


    @Column()
    clicks: number;

    @Column({ default: new Date().toLocaleString(), update: false })
    created_at: string;

    @Column({ nullable: true })
    last_visited: string;

    //method to run before inserting new url

    @BeforeInsert() async beforeInserting() {
        this.clicks = 0;
        this.short_link = encodeUrl();

    }
}