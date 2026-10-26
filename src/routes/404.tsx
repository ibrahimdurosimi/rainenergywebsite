import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/rain/shared";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/404")({
  head: () =>
    pageHead(
      "Page not found",
      "This page could not be found. Explore Rain Energy services and projects.",
      "/404",
    ),
  component: NotFound,
});
