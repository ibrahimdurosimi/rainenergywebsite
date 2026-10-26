import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/rain/updates";
import { pageHead, news } from "@/data/content";
export const Route = createFileRoute("/article")({
  validateSearch: (s: Record<string, unknown>) => ({
    n: typeof s["n"] === "string" ? s["n"] : undefined,
  }),
  head: ({ match }) => {
    const slug = match.search.n;
    const item = news.find((item) => item.slug === slug);
    return pageHead(
      item?.title || "News not found",
      item?.summary || "Explore Rain Energy news.",
      `/article${slug ? "?n=" + encodeURIComponent(slug) : ""}`,
    );
  },
  component: Page,
});
function Page() {
  const search = Route.useSearch();
  return <ArticlePage slug={search.n ?? ""} />;
}
