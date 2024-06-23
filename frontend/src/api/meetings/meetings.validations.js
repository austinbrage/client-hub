import z from "zod";

export class MeetingsValidations {

    schema = z.object({
        id: z.number(),
        client_id: z.number(),
        title: z.string(),
        description: z.union([z.string(), z.null()]),
        date_time: z.date(),
        created_at: z.union([z.date(), z.null()]),
        updated_at: z.union([z.date(), z.null()]),
    });

    getAllByClient = (data) => this.schema.pick({ client_id: true }).safeParse(data)
    getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
    getId = (data) => this.schema.pick({ client_id: true, title: true }).safeParse(data)
    addNew = (data) => this.schema.pick({ client_id: true, title: true, description: true, date_time: true }).safeParse(data)
    changeData = (data) => this.schema.pick({ title: true, description: true, date_time: true, id: true }).safeParse(data)
    remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}
