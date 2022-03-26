import { Ctx, Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ServerContext } from "../types";
import { Recipe } from "./Recipe";
import { UserSavedRecipes } from "./UserSavedRecipe";


@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column({ unique: true })
    user_name!: string;

    @Field(() => String)
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Field()
    @CreateDateColumn()
    created_at: Date;

    @Field()
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => UserSavedRecipes, ur => ur.user)
    recipeConnection: Promise<UserSavedRecipes[]>;

    @Field(() => [Recipe], { nullable: true })
    async savedRecipes(@Ctx() { recipeLoader }: ServerContext): Promise<Recipe[]> {
        return recipeLoader!.load(this.id)
    }
}
