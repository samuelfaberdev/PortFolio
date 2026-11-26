import { useTranslations } from "next-intl";
import Image from "next/image";
import { PROJECTS, type Project } from "../utils/projects";

function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("Projects");
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border-2 border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40 transition duration-300 hover:-translate-y-1 hover:border-pink-500/60">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500/20 to-orange-400/20">
        {project.image ? (
          <Image
            src={project.image}
            alt={t("preview", { title: project.title })}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden
            className="text-7xl transition duration-300 group-hover:scale-110"
          >
            {project.emoji}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {project.context}
        </p>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="flex-1 text-neutral-700 dark:text-neutral-300">
          {project.description}
        </p>

        <div className="flex flex-col gap-1 text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            {project.team
              ? project.team.size
                ? t("teamOf", { size: project.team.size })
                : t("team")
              : t("solo")}
          </p>
          {project.team && (
            <p>
              <strong className="text-neutral-800 dark:text-neutral-200">
                {t("role")}
              </strong>{" "}
              {project.team.role}
            </p>
          )}
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={t("technologies")}>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-0.5 text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.demo ? (
            <a
              href={project.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button"
              data-umami-event="projet-demo"
              data-umami-event-projet={project.title}
            >
              {project.demo.label ?? t("demo")}
            </a>
          ) : (
            <span
              title={project.unavailable?.hint}
              className="cursor-default rounded-full border border-dashed border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm text-neutral-500 dark:text-neutral-400 me-2 mb-2"
            >
              {project.unavailable?.label ?? t("notOnline")}
            </span>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="projet-code"
              data-umami-event-projet={project.title}
              className="rounded-full border-2 border-neutral-300 dark:border-neutral-700 px-5 py-2 text-sm font-medium transition hover:border-pink-500 me-2 mb-2"
            >
              {t("code")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const t = useTranslations("Projects");
  return (
    <section
      id="projets"
      className="w-full scroll-mt-20 md:scroll-mt-28 p-4 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl lg:text-4xl">{t("title")}</h2>
        <p>{t("intro")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <a
        href="https://github.com/samuelfaberdev?tab=repositories"
        data-umami-event="tous-les-projets-github"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center gradient-text text-lg font-bold transition hover:opacity-80"
      >
        {t("allOnGithub")}
      </a>
    </section>
  );
}
