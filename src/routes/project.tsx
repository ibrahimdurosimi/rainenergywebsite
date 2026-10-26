import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/data/content";

export const Route = createFileRoute("/project")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => pageHead("Project", "Rain Energy Limited", "/project"),
  component: () => null,
});
