import Icon from "./Icon";

export default function Accreditation({
  list,
}: {
  list: { icon: string; text: string }[];
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-primary-foreground border-primary-foreground mb-4 border-b-2 pb-2 text-sm leading-relaxed sm:text-base md:text-lg">
        Accreditations
      </p>

      <ul className="text-primary-foreground grid grid-cols-1 items-start gap-y-4 sm:grid-cols-2">
        {list.map(({ icon, text }, idx) => (
          <li key={idx} className="flex items-start gap-2 sm:gap-3">
            <Icon className="h-5 w-5" src={icon} />
            <span className="text-muted-foreground text-sm">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
