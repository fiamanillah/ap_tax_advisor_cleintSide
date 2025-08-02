"use client";

import { AppButton } from "@/components/Shared/AppButton";
import Icon from "@/components/Shared/Icon";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";

export default function ForgotPassword() {
  const { form, onSubmit } = useForgotPassword();

  return (
    <div className="gradient-90 relative right-10 flex h-full w-6/12 items-center justify-center rounded-4xl">
      <Link href="/auth/register">
        <Button className="absolute top-8 left-8" variant="ghost">
          <Icon src="/icons/back.svg" />
        </Button>
      </Link>
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
                      className="text-muted-foreground placeholder:text-muted-foreground rounded-sm border !bg-white"
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
