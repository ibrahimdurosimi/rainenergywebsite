import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/data/content";

export const Route = createFileRoute("/news")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => pageHead("News & Insights", "Rain Energy Limited news and updates.", "/news"),
  component: () => null,
});
