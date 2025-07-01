import { TTaxCategory } from "@/types/TaxCategoryProps";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface IconProps {
  name: string;
  className?: string;
}

export default function TaxCategories({
  taxCategories,
}: {
  taxCategories: TTaxCategory[];
}) {
  const Icon: React.FC<IconProps> = ({ name, className }) => {
    switch (name) {
      case "User":
        return <span className={`text-xl ${className}`}>👤</span>;
      case "Briefcase":
        return <span className={`text-xl ${className}`}>🏢</span>;
      case "Home":
        return <span className={`text-xl ${className}`}>🏠</span>;
      case "TrendingUp":
        return <span className={`text-xl ${className}`}>📈</span>;
      case "Mail":
        return <span className={`text-xl ${className}`}>✉️</span>;
      case "DollarSign":
        return <span className={`text-xl ${className}`}>💰</span>; // Using a generic money icon for Self-Employed for now
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taxCategories.map((category) => (
            <Card
              key={category.id}
              className={`rounded-xl flex flex-col items-center px-4 border-none w-full ${category.bgColor}`}>
              <CardHeader className="flex items-start justify-center w-full px-2">
                <Icon name={category.icon} className=" text-gray-700" />
                <CardTitle className="text-lg text-center font-bold text-gray-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 text-gray-700">
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
