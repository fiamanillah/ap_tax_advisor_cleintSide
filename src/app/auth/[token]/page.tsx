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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useVerifyCode from "@/hooks/use-verify-code";
import Link from "next/link";

export default function VerifyCode() {
  const { form, onSubmit } = useVerifyCode();

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
              name="code"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-muted-foreground">
                    Verification Code*
                  </FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="flex w-full justify-between gap-2">
                        <InputOTPSlot
                          index={0}
                          className="text-muted-foreground h-16 w-16 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={1}
                          className="text-muted-foreground h-16 w-16 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={2}
                          className="text-muted-foreground h-16 w-16 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={3}
                          className="text-muted-foreground h-16 w-16 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={4}
                          className="text-muted-foreground h-16 w-16 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={5}
                          className="text-muted-foreground h-16 w-16 !rounded-none !bg-white drop-shadow-md"
                        />
                      </InputOTPGroup>
                    </InputOTP>
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
