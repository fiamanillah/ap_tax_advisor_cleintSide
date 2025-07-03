import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="container mx-auto p-8">
        <Card className="bg-secondary-2 border-0">
          <CardContent className="space-y-2">
            <h3 className="font-medium text-2xl">Needs attention </h3>
            <p className="text-[20px] font-normal">
              To continue with the service please complete the following
            </p>

            <div className="w-full flex justify-between items-center px-5 py-[10px] bg-background rounded-full">
              <div className="flex items-center gap-3">
                <span className="bg-secondary-2 rounded-full p-1">
                  <ArrowRight className="size-4" />
                </span>
                <div className="">
                  <h4 className="text-[20px] font-normal text-primary-1">
                    Continue answering questions
                  </h4>
                  <p className="text-[16px] text-normal">
                    For security reasons, please update your password
                  </p>
                </div>
              </div>

              <Button
                variant={"outline"}
                className="px-5 py-[10px] rounded-full bg-foreground/10 text-[20px] font-medium text-primary-1"
              >
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
