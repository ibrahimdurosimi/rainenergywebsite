import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/data/content";

export const Route = createFileRoute("/article")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => pageHead("Article", "Rain Energy Limited", "/article"),
  component: () => null,
});
