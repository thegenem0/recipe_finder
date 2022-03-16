import path from "path";
import { ConnectionOptions } from "typeorm";
import { Recipe } from "./entities/Recipe";
import { User } from "./entities/User";


export default {
    type: "postgres",
    database: "recipe-db",
    username: "postgres",
    password: "postgres",
    synchronize: false,
    entities: [User, Recipe],
    migrations: [path.join(__dirname, "./entities/migrations/*.js")],
    cli: {
        "migrationsDir": path.join(__dirname, "./entities/migrations")
    }
} as ConnectionOptions;