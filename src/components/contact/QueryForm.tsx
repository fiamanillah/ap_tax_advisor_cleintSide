"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogModal } from "../dialog-modal";
import SelectInput from "../selectInput";
import Icon from "../Shared/Icon";
import { Textarea } from "../ui/textarea";
import DateTimeCalendar from "./DateTimeCalendar";
import { formSchema } from "./formSchema";

export default function QueryForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      queryMethod: "",
      emailAddress: "",
      query: "",
    },
  });

  const selectedQueryMethod = form.watch("queryMethod");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsOpen(true);
  }

  const communicationMethods = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "meeting", label: "Meeting" },
  ];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* First And Last Name */}
          <div className="space-y-2">
            <div className="flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <FormLabel className="text-muted-foreground text-[16px]">
                      <p>
                        First name <span className="-ml-1 text-red-500">*</span>
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        // placeholder="Enter your first name"
                        {...field}
                        className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                  <FormItem className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                    <FormLabel className="text-muted-foreground text-[16px]">
                      Last name <span className="-ml-1 text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        // placeholder="Enter your last name"
                        {...field}
                        className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-muted-foreground text-[12px]">
              Please enter your full legal name and not your nickname!
            </p>
          </div>

          {/* Query Method */}
          <FormField
            control={form.control}
            name="queryMethod"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <SelectInput
                    placeholder="Select a query method"
                    items={communicationMethods}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="w-full"
                    contentClassName="w-10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Conditional Fields for Email Query Method */}
          {selectedQueryMethod === "email" && (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-muted-foreground text-[16px]">
                      Email Address{" "}
                      <span className="-ml-1 text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        // placeholder="Enter your email address"
                        {...field}
                        className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Conditional Fields for Phone Query Method */}
          {selectedQueryMethod === "phone" && (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-muted-foreground text-[16px]">
                      Phone Number <span className="-ml-1 text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Conditional Date Time Fields  */}
          {(selectedQueryMethod === "phone" ||
            selectedQueryMethod === "meeting") && (
            <FormField
              control={form.control}
              name="callTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-muted-foreground text-[16px]">
                    {selectedQueryMethod === "phone"
                      ? "When we call you?"
                      : "Schedule a meeting*"}
                    <span className="-ml-1 text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <DateTimeCalendar
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select date and time"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Query Textarea Field */}
          {(selectedQueryMethod === "email" ||
            selectedQueryMethod === "phone" ||
            selectedQueryMethod === "meeting") && (
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-muted-foreground text-[16px]">
                    Your Query <span className="-ml-1 text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about your tax query so that we can better understand your position."
                      {...field}
                      className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 custom-scrollbar max-h-[200px] border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            className="w-full cursor-pointer rounded-sm bg-[#00990099] text-white transition-colors duration-300 hover:bg-[#009900ab]"
            size={"lg"}
          >
            Submit
          </Button>
        </form>
      </Form>

      {/* Confirmation Modal */}
      <DialogModal isOpen={isOpen} onOpenChange={setIsOpen}>
        <div className="flex flex-col items-center justify-center gap-[28px] p-6 text-center">
          <Icon src="/icons/tick.svg" />
          <h2 className="text-muted-foreground text-[20px] font-medium">
            Submission Successful!
          </h2>
          <p className="text-muted-foreground/80 text-base">
            Thank you for your submission. We have received your information and
            will process it shortly. You will receive a confirmation email
            within the next few minutes.
          </p>
          <Button
            onClick={() => {
              setIsOpen(false);
              form.reset();
              router.push("/");
            }}
            className="bg-[#009900] px-[20px] py-3 text-white transition-colors duration-300 hover:bg-[#009900b4]"
            size={"lg"}
          >
            Back to Home
          </Button>
        </div>
      </DialogModal>
    </>
  );
}
