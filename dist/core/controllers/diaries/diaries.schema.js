"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoDiariesData = void 0;
const zod_1 = require("zod");
const diariesSchema = zod_1.z.object({
    username: zod_1.z.string({
        required_error: "El usuario es requerido."
    }).optional(),
    password: zod_1.z.string({
        required_error: "La password es requerido."
    }),
    type: zod_1.z.enum(["NATURAL", "JURIDIC"], {
        required_error: "El tipo de usuario es requerido."
    })
}, {
    required_error: 'Las siguientes propiedades son requeridas: eventName, payload.',
});
const DtoDiariesData = (data) => {
    return diariesSchema.safeParse(data);
};
exports.DtoDiariesData = DtoDiariesData;
