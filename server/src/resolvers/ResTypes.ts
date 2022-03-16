import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@InputType()
export class RecipeInput {
    @Field()
    recipe_name!: string;

    @Field()
    recipe_desc!: string;

    @Field()
    recipe_cat!: string;

    @Field(() => [String])
    ingredients!: String[];

    @Field(() => [String])
    quantities!: string[];

    @Field()
    recipe_img: string;
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
    user!: string;

    @Field()
    password!: string;
}

@ObjectType()
export class UserResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field()
    user?: User;
}

@ObjectType()
export class FieldError {
    @Field()
    field: string;

    @Field()
    message: string;
}