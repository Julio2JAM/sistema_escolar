import { infer, z } from "zod"

const studentsSchema = z.object({
    fistname: z.string({
        required_error: "El campo firstname es requerido."
    }),
    lastname: z.string({
        required_error: "El campo lastname es requerido."
    }),
    phone: z.string({
        required_error: "El campo phone es requerido."
    }),
    email: z.string({
        required_error: "El campo email es requerido."
    }),
    datetime: z.date({
        required_error: "El campo datetime es requerido."
    }),
})

//const studentsSchemaType = z.infer<typeof studentsSchema>
