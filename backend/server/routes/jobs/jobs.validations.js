import { z } from 'zod';

export class JobsValidation {

   schema = z.object({
      id: z.number(),
      client_id: z.number(),
      title: z.string(),
      price: z.string(),
      status: z.string(),
      deadline: z.string(),
      description: z.union([z.string(), z.null()]),
      created_at: z.union([z.date(), z.null()]),
      updated_at: z.union([z.date(), z.null()]),
   })

   getAllByClient = (data) => this.schema.pick({ client_id: true }).safeParse(data)
   getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
   getId = (data) => this.schema.pick({ client_id: true, title: true }).safeParse(data)
   addNew = (data) => this.schema.pick({ client_id: true, title: true, price: true, status: true, deadline: true, description: true }).safeParse(data)
   changeData = (data) => this.schema.pick({ title: true, price: true, status: true, deadline: true, description: true, id: true }).safeParse(data)
   remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}

export class JobsStringValidation {

   schema = z.object({
      id: z.string(),
      client_id: z.string(),
      title: z.string(),
      price: z.string(),
      status: z.string(),
      deadline: z.string(),
      description: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
   })

   getAllByClient = (data) => this.schema.pick({ client_id: true }).safeParse(data)
   getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
   getId = (data) => this.schema.pick({ client_id: true, title: true }).safeParse(data)
}