import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface GetStartedProps {
  title: string;
  description: string[];
  buttonText: string;
  classNames?: string;
}

export default function GetStarted({
  title,
  description,
  buttonText,
  classNames,
}: GetStartedProps) {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
        {/* New Call to Action Section */}
        <div
          className={cn(
            "w-full bg-[#A4F5D3] rounded-md p-6 md:p-10 flex flex-col items-center justify-center text-center",
            classNames
          )}>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <div className="text-black mb-6 max-w-xl">
            {description.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
