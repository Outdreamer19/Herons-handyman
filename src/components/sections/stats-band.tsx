import { stats } from "@/lib/data";
import { CountUp } from "@/components/count-up";

export function StatsBand() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="font-display text-4xl text-navy">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
