"use client";

import { useLiveQuery } from "dexie-react-hooks";
import { db, populate } from "@/lib/db";
import { MainPillar } from "./MainPillar";
import { SupportPillarCard } from "./SupportPillarCard";
import { BookMarked, Dumbbell, type LucideIcon } from "lucide-react";
import { useEffect } from "react";

const iconMap: { [key: string]: LucideIcon } = {
  "Pós-Graduação": BookMarked,
  "Malhar 3x/semana": Dumbbell,
};

export function ClarityDashboard() {
  const pillars = useLiveQuery(() => db.pillars.toArray(), []);

  useEffect(() => {
    populate();
  }, []);

  if (!pillars) {
    return <div className="text-center py-16">Carregando seus pilares...</div>;
  }

  const mainPillar = pillars.find((p) => p.type === "main") || null;
  const supportPillars = pillars.filter((p) => p.type === "support");

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
