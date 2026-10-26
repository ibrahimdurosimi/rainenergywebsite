import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/components/rain/updates";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/news")({
  head: () =>
    pageHead(
      "News & insights",
      "Project updates, safety news and energy sector insights from Rain Energy.",
      "/news",
    ),
  component: NewsPage,
});
