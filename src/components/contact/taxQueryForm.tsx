"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DateTimeCalendar from "./DateTimeCalendar";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  query: z.string().min(1, { message: "Query is required" }),
});

export default function TaxQueryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
                  <FormLabel className="text-[16px]">
                    <p>
                      First name <span className="text-red-500">*</span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Akash" {...field} />
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
                  <FormLabel className="text-[16px]">Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Patel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-sm">
            Give your full legal name - no nicknames please!
          </p>
        </div>

        {/* Email Address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">
                <p>
                  Email Address <span className="text-red-500">*</span>
                </p>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="demoemail@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">
                <p>
                  Phone number <span className="text-red-500">*</span>
                </p>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter phone number..."
                  type="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date & Time Calendar */}
        <div className="">
          <FormLabel className="text-[16px]">
            Schedule a meeting (if required)
          </FormLabel>
          <DateTimeCalendar />
        </div>

        {/* Query */}
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[16px]">
                <p>
                  Query <span className="text-red-500">*</span>
                </p>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide detail about your tax query..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
