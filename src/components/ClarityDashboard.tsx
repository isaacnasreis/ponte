"use client";

import React, { useEffect, useState } from "react";
import { BookMarked, Dumbbell, LucideIcon } from "lucide-react";
import { MainPillar } from "./MainPillar";
import { SupportPillarCard } from "./SupportPillarCard";

type Pillar = {
  id: string;
  title: string;
  description?: string;
  type: "main" | "support";
  progress?: number;
  next_milestone?: string;
};

const iconMap: { [key: string]: LucideIcon } = {
  "Pós-Graduação": BookMarked,
  "Malhar 3x/semana": Dumbbell,
};

type ClarityDashboardProps = {
  initialPillars: Pillar[];
};

export function ClarityDashboard({ initialPillars }: ClarityDashboardProps) {
  const [mainPillar, setMainPillar] = useState<Pillar | null>(null);
  const [supportPillars, setSupportPillars] = useState<Pillar[]>([]);

  useEffect(() => {
    const main = initialPillars.find((p) => p.type === "main") || null;
    const support = initialPillars.filter((p) => p.type === "support");

    setMainPillar(main);
    setSupportPillars(support);
  }, [initialPillars]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-[2]">
          {mainPillar ? (
            <MainPillar
              title={mainPillar.title}
              description={mainPillar.description || ""}
              progress={mainPillar.progress || 0}
              nextMilestone={mainPillar.next_milestone || ""}
            />
          ) : (
            <p>Nenhum pilar principal definido.</p>
          )}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold px-2">
            Pilares de Suporte
          </h2>
          {supportPillars.map((pillar) => {
            const IconComponent = iconMap[pillar.title] || BookMarked;
            return (
              <SupportPillarCard
                key={pillar.id}
                title={pillar.title}
                Icon={IconComponent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
