"use client";
import useLogin from "@/hooks/use-login";

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
import Link from "next/link";
import GoBack from "../_components/GoBack";
import PasswordInput from "../_components/PasswordInput";

export default function LoginPage() {
  const { form, onSubmit } = useLogin();

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

            <AppButton type="submit" className="w-full">
              Submit
            </AppButton>
            <div className="flex justify-end">
              <Link href="/auth/forgot-password">
                <span className="text-muted-foreground hover:text-muted-foreground text-sm">
                  Forgot password?
                </span>
              </Link>
            </div>
          </form>
        </Form>
        <div className="mb-5 flex items-center gap-x-10 px-10">
          <span className="bg-muted-foreground/30 block h-0.5 flex-1"></span>
          <span className="text-muted-foreground">or Log in with</span>
          <span className="bg-muted-foreground/30 block h-0.5 flex-1"></span>
        </div>
        <div className="flex items-center justify-center gap-10 px-16">
          <Button
            variant="outline"
            className="text-muted-foreground !border-muted-foreground hover:text-muted-foreground flex-1 cursor-pointer rounded-2xl"
            size="lg"
          >
            <Icon src="/icons/apple.svg" /> <span>Apple ID</span>
          </Button>

          <Button
            variant="outline"
            className="text-muted-foreground !border-muted-foreground hover:text-muted-foreground flex-1 cursor-pointer rounded-2xl"
            size="lg"
          >
            <Icon src="/icons/google.svg" /> <span>Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
