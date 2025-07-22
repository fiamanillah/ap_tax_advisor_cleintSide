"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SelectInput from "../selectInput";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  queryMethod: z.string().min(1, { message: "Query method is required" }),
});

export default function QueryMethodSelectionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      queryMethod: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Query Method submitted successfully!");
  }

  const communicationMethods = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "meeting", label: "Meeting" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* First And Last Name */}
        <div className="space-y-2">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="text-muted-foreground text-[16px]">
                    <p>
                      First name <span className="-ml-1 text-red-500">*</span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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
                <FormItem className="w-1/2">
                  <FormLabel className="text-muted-foreground text-[16px]">
                    Last name <span className="-ml-1 text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      {...field}
                      className="text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
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

        <Button
          type="submit"
          className="w-full cursor-pointer rounded-sm bg-[#00990099] text-white transition-colors duration-300 hover:bg-[#009900ab]"
          size={"lg"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
