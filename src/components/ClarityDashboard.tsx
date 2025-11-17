"use client";

import { db, populate } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";
import {
  BookMarked,
  Dumbbell,
  PlusCircle,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AddPillarForm } from "./AddPillarForm";
import { MainPillar } from "./MainPillar";
import { SupportPillarCard } from "./SupportPillarCard";

const iconMap: { [key: string]: LucideIcon } = {
  "Pós-Graduação": BookMarked,
  "Malhar 3x/semana": Dumbbell,
};

export function ClarityDashboard() {
  const pillars = useLiveQuery(() => db.pillars.toArray(), []);
  const [isAddingPillar, setIsAddingPillar] = useState(false);

  useEffect(() => {
    populate();
  }, []);

  const handleAddSupportPillar = async (title: string) => {
    try {
      await db.pillars.add({
        title,
        type: "support",
        createdAt: new Date(),
      });
      setIsAddingPillar(false);
    } catch (error) {
      console.error("Falha ao adicionar novo pilar:", error);
    }
  };

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
          <div className="flex justify-between items-center px-2">
            <h2 className="font-heading text-xl font-bold">
              Pilares de Suporte
            </h2>
            <button
              onClick={() => setIsAddingPillar(true)}
              className="text-primary hover:text-opacity-80 transition-colors"
              title="Adicionar novo pilar de suporte"
            >
              <PlusCircle size={24} />
            </button>
          </div>

          {isAddingPillar ? (
            <AddPillarForm
              onCancel={() => setIsAddingPillar(false)}
              onSubmit={handleAddSupportPillar}
            />
          ) : (
            supportPillars.map((pillar) => {
              const IconComponent = iconMap[pillar.title] || BookMarked;
              return (
                <SupportPillarCard
                  key={pillar.id}
                  title={pillar.title}
                  Icon={IconComponent}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
