import z from 'zod';
const usersSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(15, { message: 'max limited is 15 word ' })
    .optional(),
});

export const userValidation = {
  usersSchema,
};
