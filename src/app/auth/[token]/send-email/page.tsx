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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useVerifyCode from "@/hooks/use-verify-code";
import GoBack from "../../_components/GoBack";

export default function VerifyCode() {
  const { form, onSubmit } = useVerifyCode();

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
                          className="text-muted-foreground placeholder:text-muted-foreground h-14 w-14 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={1}
                          className="text-muted-foreground h-14 w-14 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={2}
                          className="text-muted-foreground h-14 w-14 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={3}
                          className="text-muted-foreground h-14 w-14 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={4}
                          className="text-muted-foreground h-14 w-14 !rounded-none !bg-white drop-shadow-md"
                        />
                        <InputOTPSlot
                          index={5}
                          className="text-muted-foreground h-14 w-14 !rounded-none !bg-white drop-shadow-md"
                        />
                      </InputOTPGroup>
                    </InputOTP>
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
