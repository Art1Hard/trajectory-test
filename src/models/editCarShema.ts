import z from "zod";

export const editCarSchema = z.object({
	name: z.string().min(3).max(25),
	price: z.number().min(5000).max(10000000),
});

export type EditCarSchema = z.infer<typeof editCarSchema>;
