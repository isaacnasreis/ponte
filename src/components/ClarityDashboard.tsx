import React from "react";

export function ClarityDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-[2]">
          <div className="bg-white p-8 rounded-2xl shadow-subtle">
            <h1 className="font-heading text-3xl font-bold text-text">
              Virar Especialista UX/Front-end
            </h1>
            <p className="font-body text-gray-500 mt-2">
              Minha principal ponte para o próximo nível da minha carreira e
              realização profissional.
            </p>

            <div className="mt-8">
              <p className="text-sm text-primary">[Botão e Progresso aqui]</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold px-2">
            Pilares de Suporte
          </h2>

          <div className="bg-neutral-light p-6 rounded-2xl">
            <h3 className="font-heading font-semibold text-text">
              Pós-Graduação
            </h3>
          </div>

          <div className="bg-neutral-light p-6 rounded-2xl">
            <h3 className="font-heading font-semibold text-text">
              Malhar 3x/semana
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
