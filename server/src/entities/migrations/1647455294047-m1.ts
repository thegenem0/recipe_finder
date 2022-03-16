import {MigrationInterface, QueryRunner} from "typeorm";

export class m11647455294047 implements MigrationInterface {
    name = 'm11647455294047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "created_at"`);
    }

}
