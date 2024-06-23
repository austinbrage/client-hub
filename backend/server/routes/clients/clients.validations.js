import { z } from 'zod';

export class ClientsValidation {

   schema = z.object({
      id: z.number(),
      user_id: z.number(),
      name: z.string(),
      contact_number: z.string(),
      contact_email: z.string(),
      description: z.union([z.string(), z.null()]),
      created_at: z.union([z.date(), z.null()]),
      updated_at: z.union([z.date(), z.null()]),
   })

   getAllByUser = (data) => this.schema.pick({ user_id: true }).safeParse(data)
   getByName = (data) => this.schema.pick({ name: true }).safeParse(data)
   getId = (data) => this.schema.pick({ user_id: true, name: true }).safeParse(data)
   addNew = (data) => this.schema.pick({ user_id: true, name: true, contact_number: true, contact_email: true, description: true }).safeParse(data)
   changeData = (data) => this.schema.pick({ name: true, contact_number: true, contact_email: true, description: true, id: true }).safeParse(data)
   remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}

export class ClientsStringValidation {

   schema = z.object({
      id: z.string(),
      user_id: z.string(),
      name: z.string(),
      contact_number: z.string(),
      contact_email: z.string(),
      description: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
   })

   getAllByUser = (data) => this.schema.pick({ user_id: true }).safeParse(data)
   getByName = (data) => this.schema.pick({ name: true }).safeParse(data)
   getId = (data) => this.schema.pick({ user_id: true, name: true }).safeParse(data)
}