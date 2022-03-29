import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@InputType()
export class RecipeInput {
    @Field()
    recipe_name!: string;

    @Field()
    recipe_desc!: string;

    @Field(() => [String])
    ingredients!: String[];

    @Field(() => [String])
    quantities!: string[];

    @Field({ nullable: true })
    recipe_img?: string;

    @Field({ nullable: true })
    recipe_cat: number;

    @Field({ nullable: true })
    recipe_diet: number;

    @Field({ nullable: true })
    recipe_cuisine: number;
}

@InputType()
export class TagsInput {

    @Field()
    category_id: number

    @Field()
    diet_id: number

    @Field()
    cuisine_id: number
}


@InputType()
export class RegInfo {
    @Field()
    user_name!: string;

    @Field()
    email!: string;

    @Field()
    password!: string;
}

@InputType()
export class LoginInfo {
    @Field()
    username: string;

    @Field()
    password!: string;
}

@ObjectType()
export class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field({ nullable: true })
    user?: User;
}

@ObjectType()
export class FieldError {
    @Field()
    field: string;

    @Field()
    message: string;
}