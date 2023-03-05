import { v4 as uuid } from "uuid";
import fs from "fs";
let users = {
    table: [],
};

export default defineEventHandler(async (e) => {
    if (e.req.method === "POST") {
        const { user_phone } = await readBody(e);
        users.table.push({
            id: uuid(),
            userPhone: user_phone,
        });
        const jsonUsers = JSON.stringify(users);
        fs.writeFile("user-database.json", jsonUsers, "utf-8", (err) => {
            console.error(err);
        });
    }
    return "Hello Hacker"
});
