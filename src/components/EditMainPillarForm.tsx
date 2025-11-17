"use client";

import { Pillar } from "@/lib/db";
import { useEffect, useState } from "react";

type EditMainPillarFormProps = {
  pillar: Pillar;
  onCancel: () => void;
  onSubmit: (updatedData: {
    progress: number;
    nextMilestone: string;
  }) => Promise<void>;
};

export function EditMainPillarForm({
  pillar,
  onCancel,
  onSubmit,
}: EditMainPillarFormProps) {
  const [progress, setProgress] = useState(pillar.progress || 0);
  const [nextMilestone, setNextMilestone] = useState(
    pillar.next_milestone || ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setProgress(pillar.progress || 0);
    setNextMilestone(pillar.next_milestone || "");
  }, [pillar]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit({
      progress: Number(progress),
      nextMilestone,
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-subtle flex flex-col gap-6">
      <h2 className="font-heading text-2xl font-bold text-text">
        Atualizar Pilar Principal
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="progress"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Progresso ({progress}%)
          </label>
          <input
            id="progress"
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full h-2 bg-neutral-light rounded-lg appearance-none cursor-pointer range-thumb"
          />
        </div>

        <div>
          <label
            htmlFor="milestone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Próximo Marco
          </label>
          <input
            id="milestone"
            type="text"
            value={nextMilestone}
            onChange={(e) => setNextMilestone(e.target.value)}
            placeholder="Ex: Finalizar Portfólio"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 cursor-pointer"
            disabled={isSubmitting}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-opacity-50 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Atualizando..." : "Atualizar"}
          </button>
        </div>
      </form>
    </div>
  );
}
