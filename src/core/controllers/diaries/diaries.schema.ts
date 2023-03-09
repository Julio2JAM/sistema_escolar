import { z } from 'zod';

const diariesSchema = z.object({
    username: z.string({
        required_error: "El usuario es requerido."
    }).optional(),
    password: z.string({
        required_error: "La password es requerido."
    }),

    type: z.enum(["NATURAL", "JURIDIC"], {
        required_error: "El tipo de usuario es requerido."
    })
    
}, {
    required_error: 'Las siguientes propiedades son requeridas: eventName, payload.',
})

type IDiariesSchema = z.infer<typeof diariesSchema>;

export const DtoDiariesData = (data: IDiariesSchema) => {
    return diariesSchema.safeParse(data);
}