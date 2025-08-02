"use client";

import useResetPassword from "@/hooks/use-reset-password";

import { AppButton } from "@/components/Shared/AppButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import GoBack from "../../_components/GoBack";
import PasswordInput from "../../_components/PasswordInput";

export default function ResetPassword() {
  const { form, onSubmit } = useResetPassword();

  return (
    <div className="gradient-90 relative right-10 flex h-full w-6/12 items-center justify-center rounded-4xl">
      <GoBack />

      <div className="w-full max-w-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8 p-8"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-muted-foreground">
                    Password*
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      className="text-muted-foreground placeholder:text-muted-foreground !bg-white"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-muted-foreground">
                    Confirm Password*
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      className="text-muted-foreground placeholder:text-muted-foreground !bg-white"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <AppButton type="submit" className="w-full">
              Submit
            </AppButton>
          </form>
        </Form>
      </div>
    </div>
  );
}
