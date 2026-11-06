import { experience } from "@/data/experience";
import { CareerGameLauncher } from "./game/CareerGameLauncher";

// Set as a résumé: the dates in their own column, the role beside them,
// a rule between roles.
export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>

      <div className="mt-8">
        <CareerGameLauncher />
      </div>

      <ol className="mt-10 border-t-2 border-foreground">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="grid gap-x-10 gap-y-3 border-b border-line py-8 sm:grid-cols-[10.5rem_minmax(0,1fr)]"
          >
            <div className="text-[15px] text-muted tabular-nums">
              <p className="font-semibold text-foreground">{role.period}</p>
              <p className="mt-0.5">{role.location}</p>
            </div>

            <article>
              <h3 className="font-serif text-2xl font-semibold tracking-tight">{role.company}</h3>
              <p className="mt-1 font-semibold">{role.title}</p>
              <p className="mt-3 max-w-2xl text-muted">{role.summary}</p>

              {role.stats.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                  {role.stats.map((stat) => (
                    <li key={stat.label} className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-semibold tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-sm text-muted">{stat.label}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 text-muted marker:text-subtle">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-subtle">{role.stack.join(", ")}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
