import { eq } from "drizzle-orm";
import { db } from "../index";
import { sessions } from "../schema/sessions.schema";


export class Session{
    async findAll(){
        return db.select().from(sessions);
    }
    async create(data:any){
        const result = await db
            .insert(sessions)
            .values(data);
        return result;
    }
    async deleteById(id:number){       
        const result = await db
            .delete(sessions)
            .where(eq(sessions.id, id))
        return result;
    }

}