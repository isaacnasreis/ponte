import { X } from "lucide-react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

type SupportPillarCardProps = {
  title: string;
  Icon: IconType;
  onDelete: () => void;
};

export function SupportPillarCard({
  title,
  Icon,
  onDelete,
}: SupportPillarCardProps) {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="bg-neutral-light p-6 rounded-2xl flex items-center gap-4 relative">
      <button
        onClick={handleDeleteClick}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full cursor-pointer"
        title={`Eliminar "${title}"`}
      >
        <X size={16} />
      </button>

      <Icon size={24} className="text-primary" />
      <h3 className="font-heading font-semibold text-text">{title}</h3>
    </div>
  );
}
