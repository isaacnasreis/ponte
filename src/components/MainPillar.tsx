import { ArrowRight, Edit3, Flag } from "lucide-react";

type MainPillarProps = {
  title: string;
  description: string;
  progress: number;
  nextMilestone: string;
  onEditClick: () => void;
};

export function MainPillar({
  title,
  description,
  progress,
  nextMilestone,
  onEditClick,
}: MainPillarProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-subtle flex flex-col gap-4 relative">
      <button
        onClick={onEditClick}
        className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors cursor-pointer"
        title="Editar pilar principal"
      >
        <Edit3 size={20} />
      </button>

      <h1 className="font-heading text-3xl font-bold text-text">{title}</h1>
      <p className="font-body text-gray-500">{description}</p>

      <div
        className="mt-4 space-y-4 cursor-pointer"
        onClick={onEditClick}
        title="Clique para atualizar o progresso"
      >
        <div className="w-full bg-neutral-light rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Flag size={16} className="text-primary" />
          <span>
            Próximo Marco: <strong>{nextMilestone}</strong>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <button className="bg-primary text-white font-body font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-colors">
          Ver Projeto
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
