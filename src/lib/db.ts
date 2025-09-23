import Dexie, { type Table } from "dexie";

export type Pillar = {
  id?: number;
  createdAt: Date;
  title: string;
  description?: string | null;
  type: "main" | "support";
  progress?: number | null;
  next_milestone?: string | null;
};

export class MySubClassedDexie extends Dexie {
  pillars!: Table<Pillar>;

  constructor() {
    super("ponteDatabase");
    this.version(1).stores({
      pillars: "++id, type",
    });
  }
}

export const db = new MySubClassedDexie();

export async function populate() {
  const count = await db.pillars.count();
  if (count === 0) {
    console.log("Banco de dados vazio, populando com dados iniciais...");
    await db.pillars.bulkAdd([
      {
        title: "Virar Especialista UX/Front-end",
        description:
          "Minha principal ponte para o próximo nível da minha carreira e realização profissional.",
        type: "main",
        progress: 40,
        next_milestone: "Finalizar Portfólio",
        createdAt: new Date(),
      },
      {
        title: "Pós-Graduação",
        type: "support",
        createdAt: new Date(),
      },
      {
        title: "Malhar 3x/semana",
        type: "support",
        createdAt: new Date(),
      },
    ]);
  }
}
