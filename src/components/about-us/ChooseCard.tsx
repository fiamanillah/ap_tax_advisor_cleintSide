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
    <div className="flex max-md:flex-col md:items-start gap-4 md:not-last:border-b-2 border-gray-400 pb-8 flex-1 md:max-w-84">
      <Image src={icon} alt={title} width={100} height={100} />
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-black font-medium text-sm">{description}</p>
      </div>
    </div>
  );
}
