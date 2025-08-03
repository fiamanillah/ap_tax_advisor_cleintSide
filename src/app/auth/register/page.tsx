"use client";

import { AppButton } from "@/components/Shared/AppButton";
import Icon from "@/components/Shared/Icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useRegister from "@/hooks/use-register";
import Link from "next/link";
import GoBack from "../_components/GoBack";
import PasswordInput from "../_components/PasswordInput";

export default function Register() {
  const { form, onSubmit } = useRegister();
  return (
    <div className="gradient-90 relative flex h-full w-full items-center justify-center rounded-4xl py-10 lg:right-16 lg:w-6/12">
      <GoBack />

      <div className="w-full max-w-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8 p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-muted-foreground">
                      First name*
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-muted-foreground">
                      Last name*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-muted-foreground placeholder:text-muted-foreground border-[#CDCDCD] !bg-white shadow-sm"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormDescription className="text-muted-foreground col-span-2">
                Please enter your full legal name and not your nickname!
              </FormDescription>
            </div>

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
                      className="text-muted-foreground placeholder:text-muted-foreground border-[#CDCDCD] !bg-white shadow-sm"
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
                      className="text-muted-foreground placeholder:text-muted-foreground border-[#CDCDCD] !bg-white shadow-sm"
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
                    Confirm password*
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

            <div className="flex items-center">
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-muted-foreground mr-2"
                        />
                      </FormControl>
                      <FormDescription>
                        <span className="text-muted-foreground text-sm">
                          By signing up, you agree to our{" "}
                          <Link
                            href="/terms"
                            className="text-blue-500 hover:underline"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            className="text-blue-500 hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </span>
                      </FormDescription>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <AppButton type="submit" className="w-full text-lg">
              Submit
            </AppButton>
          </form>
        </Form>
        <div className="mb-5 flex items-center gap-x-10 px-10">
          <span className="bg-muted-foreground/30 block h-0.5 flex-1"></span>
          <span className="text-muted-foreground">or sing up with</span>
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
        <p className="mt-5 text-center text-sm text-[#807D7A]">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-background">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
