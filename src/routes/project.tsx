import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/rain/work";
import { pageHead, projects } from "@/data/content";
export const Route = createFileRoute("/project")({
  validateSearch: (s: Record<string, unknown>) => ({
    p: typeof s["p"] === "string" ? s["p"] : undefined,
  }),
  head: ({ match }) => {
    const slug = match.search.p;
    const item = projects.find((item) => item.slug === slug);
    return pageHead(
      item?.title || "Projects not found",
      item?.overview || "Explore Rain Energy projects.",
      `/project${slug ? "?p=" + encodeURIComponent(slug) : ""}`,
    );
  },
  component: Page,
});
function Page() {
  const search = Route.useSearch();
  return <ProjectPage slug={search.p ?? ""} />;
}
