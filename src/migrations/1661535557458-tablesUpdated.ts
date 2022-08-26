import {MigrationInterface, QueryRunner} from "typeorm";

export class tablesUpdated1661535557458 implements MigrationInterface {
    name = 'tablesUpdated1661535557458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "director" character varying NOT NULL, "released" TIMESTAMP NOT NULL, "duration" character varying NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
