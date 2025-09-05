import React from "react";
import { BookMarked, Dumbbell } from "lucide-react";
import { MainPillar } from "./MainPillar";
import { SupportPillarCard } from "./SupportPillarCard";

const mainPillarData = {
  title: "Virar Especialista UX/Front-end",
  description:
    "Minha principal ponte para o próximo nível da minha carreira e realização profissional.",
  progress: 40,
  nextMilestone: "Finalizar Portfólio",
};

const supportPillarsData = [
  { title: "Pós-Graduação", Icon: BookMarked },
  { title: "Malhar 3x/semana", Icon: Dumbbell },
];

export function ClarityDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-[2]">
          <MainPillar
            title={mainPillarData.title}
            description={mainPillarData.description}
            progress={mainPillarData.progress}
            nextMilestone={mainPillarData.nextMilestone}
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold px-2">
            Pilares de Suporte
          </h2>
          {supportPillarsData.map((pillar) => (
            <SupportPillarCard
              key={pillar.title}
              title={pillar.title}
              Icon={pillar.Icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
