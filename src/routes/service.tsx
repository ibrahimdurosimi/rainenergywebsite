import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/rain/work";
import { pageHead, services } from "@/data/content";
export const Route = createFileRoute("/service")({
  validateSearch: (s: Record<string, unknown>) => ({
    s: typeof s["s"] === "string" ? s["s"] : undefined,
  }),
  head: ({ match }) => {
    const slug = match.search.s;
    const item = services.find((item) => item.slug === slug);
    return pageHead(
      item?.name || "Services not found",
      item?.description || "Explore Rain Energy services.",
      `/service${slug ? "?s=" + encodeURIComponent(slug) : ""}`,
    );
  },
  component: Page,
});
function Page() {
  const search = Route.useSearch();
  return <ServicePage slug={search.s ?? ""} />;
}
