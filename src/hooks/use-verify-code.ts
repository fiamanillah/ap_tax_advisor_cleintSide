import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  code: z
    .string()
    .length(6, {
      message: "Verification code must be exactly 6 digits.",
    })
    .regex(/^\d{6}$/, {
      message: "Verification code must contain only numbers.",
    }),
});

export default function useVerifyCode() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return { form, onSubmit };
}
