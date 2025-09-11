import { ClarityDashboard } from "@/components/ClarityDashboard";
import { supabase } from "@/utils/supabase/client";

async function getPillars() {
  const { data, error } = await supabase.from("pillars").select("*");

  if (error) {
    console.error("Erro ao buscar os pilares no servidor:", error);
    return [];
  }
  return data;
}

export default async function HomePage() {
  const pillars = await getPillars();

  return (
    <main>
      <ClarityDashboard initialPillars={pillars} />
    </main>
  );
}
