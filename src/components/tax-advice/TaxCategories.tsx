import { cn } from "@/lib/utils";
import { TTaxCategory } from "@/types/TaxCategoryProps";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function TaxCategories({
  taxCategories,
}: {
  taxCategories: TTaxCategory[];
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {taxCategories.map((category, idx) => (
            <Card
              key={idx}
              className={cn(
                "flex w-full flex-col items-center rounded-xl border-none px-4",
                {
                  "main-gradient": idx % 2 === 0,
                  "main-gradient-reverse": idx % 2 !== 0,
                },
              )}
            >
              <CardHeader className="flex w-full flex-col items-start justify-center px-2">
                <CardTitle className="text-background w-full text-center text-lg font-bold">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center text-sm">
                  {category.questions[0]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc space-y-2">
                  {category.questions.map((question, index) => (
                    <li key={index} className="pl-2 text-sm">
                      {question}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
