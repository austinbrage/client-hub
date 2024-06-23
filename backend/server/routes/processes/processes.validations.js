import { z } from 'zod';

export class ProcessesValidation {

   schema = z.object({
      id: z.number(),
      job_id: z.number(),
      title: z.string(),
      status: z.string(),
      description: z.union([z.string(), z.null()]),
      deadline: z.union([z.date(), z.null()]),
      created_at: z.union([z.date(), z.null()]),
      updated_at: z.union([z.date(), z.null()]),
   })

   getAllByJob = (data) => this.schema.pick({ job_id: true }).safeParse(data)
   getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
   getId = (data) => this.schema.pick({ job_id: true, title: true }).safeParse(data)
   addNew = (data) => this.schema.pick({ job_id: true, title: true, status: true, description: true, deadline: true }).safeParse(data)
   changeData = (data) => this.schema.pick({ title: true, status: true, description: true, deadline: true, id: true }).safeParse(data)
   remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}

export class ProcessesStringValidation {

   schema = z.object({
      id: z.string(),
      job_id: z.string(),
      title: z.string(),
      status: z.string(),
      description: z.string(),
      deadline: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
   })

   getAllByJob = (data) => this.schema.pick({ job_id: true }).safeParse(data)
   getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
   getId = (data) => this.schema.pick({ job_id: true, title: true }).safeParse(data)
}