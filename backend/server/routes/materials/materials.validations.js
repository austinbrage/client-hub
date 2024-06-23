import { z } from 'zod';

export class MaterialsValidation {

   schema = z.object({
      id: z.number(),
      job_id: z.union([z.number(), z.null()]),
      process_id: z.union([z.number(), z.null()]),
      title: z.string(),
      description: z.union([z.string(), z.null()]),
      possible_price: z.union([z.string(), z.null()]),
      created_at: z.union([z.date(), z.null()]),
      updated_at: z.union([z.date(), z.null()]),
   })

   getAllByJob = (data) => this.schema.pick({ job_id: true }).safeParse(data)
   getAllByProcess = (data) => this.schema.pick({ process_id: true }).safeParse(data)
   getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
   getIdByJob = (data) => this.schema.pick({ job_id: true, title: true }).safeParse(data)
   getIdByProcess = (data) => this.schema.pick({ process_id: true, title: true }).safeParse(data)
   addNew = (data) => this.schema.pick({ job_id: true, process_id: true, title: true, description: true, possible_price: true }).safeParse(data)
   changeData = (data) => this.schema.pick({ title: true, description: true, possible_price: true, id: true }).safeParse(data)
   remove = (data) => this.schema.pick({ id: true }).safeParse(data)
}

export class MaterialsStringValidation {

   schema = z.object({
      id: z.string(),
      job_id: z.string(),
      process_id: z.string(),
      title: z.string(),
      description: z.string(),
      possible_price: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
   })

   getAllByJob = (data) => this.schema.pick({ job_id: true }).safeParse(data)
   getAllByProcess = (data) => this.schema.pick({ process_id: true }).safeParse(data)
   getByTitle = (data) => this.schema.pick({ title: true }).safeParse(data)
   getIdByJob = (data) => this.schema.pick({ job_id: true, title: true }).safeParse(data)
   getIdByProcess = (data) => this.schema.pick({ process_id: true, title: true }).safeParse(data)
}