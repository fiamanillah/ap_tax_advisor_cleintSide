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
                    Email address<span className="-ml-2 text-red-500">*</span>
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-muted-foreground">
                    Password<span className="-ml-2 text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      className="text-muted-foreground placeholder:text-muted-foreground border-[#CDCDCD] !bg-white shadow-sm"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <AppButton type="submit" className="w-full text-lg">
              Login
            </AppButton>
            <div className="-mt-4 flex justify-end">
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
        <div className="flex flex-col items-center justify-center gap-10 px-16 lg:flex-row">
          <Button
            variant="outline"
            className="text-muted-foreground hover:text-muted-foreground flex-1 cursor-pointer rounded-2xl !border-[#777471]"
            size="lg"
          >
            <Icon src="/icons/apple.svg" /> <span>Apple ID</span>
          </Button>

          <Button
            variant="outline"
            className="text-muted-foreground hover:text-muted-foreground flex-1 cursor-pointer rounded-2xl !border-[#777471]"
            size="lg"
          >
            <Icon src="/icons/google.svg" /> <span>Google</span>
          </Button>
        </div>
        <p className="mt-5 text-center text-sm text-[#807D7A]">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-background">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
