import Image from "next/image";

export default function ChooseCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
      <div className="flex-shrink-0 flex justify-center sm:justify-start">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
          />
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
