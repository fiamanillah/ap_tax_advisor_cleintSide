import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    queryMethod: z.string().min(1, { message: "Query method is required" }),
    emailAddress: z.string().optional(),
    query: z.string().optional(),
    phone: z.string().optional(),
    callTime: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Conditional validation: If queryMethod is 'email', then emailAddress and query are required
    if (data.queryMethod === "email") {
      if (!data.emailAddress || data.emailAddress.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email address is required when query method is Email",
          path: ["emailAddress"],
        });
      } else if (!z.string().email().safeParse(data.emailAddress).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid email address",
          path: ["emailAddress"],
        });
      }
    }

    // Conditional validation: If queryMethod is 'phone', then phoneNumber, date-time calendar and query are required
    if (data.queryMethod === "phone") {
      if (!data.phone || data.phone.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Phone number is required when query method is Phone",
          path: ["phone"],
        });
      }
    }

    // Conditional validation: If queryMethod is 'email' OR 'phone', then query is required
    if (data.queryMethod === "email" || data.queryMethod === "phone") {
      if (!data.query || data.query.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Query details are required for the selected method",
          path: ["query"],
        });
      }
    }

    // Conditional validation: If queryMethod is 'phone', then callTime is required
    if (data.queryMethod === "phone") {
      if (!data.callTime || data.callTime.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Call time is required when query method is Phone",
          path: ["callTime"],
        });
      }
    }
  });
