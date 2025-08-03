"use client";

import { AppButton } from "@/components/Shared/AppButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useForgotPassword from "@/hooks/use-forgot-password";
import GoBack from "../_components/GoBack";

export default function ForgotPassword() {
  const { form, onSubmit } = useForgotPassword();

  return (
    <div className="gradient-90 relative flex h-full w-full items-center justify-center rounded-4xl py-10 lg:right-16 lg:w-6/12">
      <GoBack />

      <div className="w-full max-w-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8 p-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-muted-foreground">
                    Email address*
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-muted-foreground placeholder:text-muted-foreground rounded-sm border border-[#CDCDCD] !bg-white shadow-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <AppButton type="submit" className="w-full text-lg">
              Submit
            </AppButton>
          </form>
        </Form>
      </div>
    </div>
  );
}
