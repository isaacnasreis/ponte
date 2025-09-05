import { BookMarked, Dumbbell } from "lucide-react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

type SupportPillarCardProps = {
  title: string;
  Icon: IconType;
};

export function SupportPillarCard({ title, Icon }: SupportPillarCardProps) {
  return (
    <div className="bg-neutral-light p-6 rounded-2xl flex items-center gap-4">
      <Icon size={24} className="text-primary" />
      <h3 className="font-heading font-semibold text-text">{title}</h3>
    </div>
  );
}
