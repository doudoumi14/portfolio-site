import { coreCompetencies, technicalToolkit } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        Core competencies
      </h2>
      <p className="mt-3 max-w-2xl text-muted">
        The engineering-plus-business combination that the P.Eng. and the MBA together are meant to
        cover.
      </p>

      <div className="mt-10 grid gap-x-10 gap-y-8 border-t-2 border-foreground pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {coreCompetencies.map((group) => (
          <div key={group.label}>
            <h3 className="font-semibold">{group.label}</h3>
            <ul className="mt-3 space-y-2 text-[15px] text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
        Technical toolkit
      </h2>
      <dl className="mt-6 grid gap-x-10 border-t border-line sm:grid-cols-2">
        {technicalToolkit.map((group) => (
          <div key={group.label} className="border-b border-line py-4">
            <dt className="font-semibold">{group.label}</dt>
            <dd className="mt-1 text-[15px] text-muted">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
